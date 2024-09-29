
"use client";

import { Avatar, Button, Input, Card, CardBody, CardHeader } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Follow = ({ defaultUser }) => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({ name: '', cardNumber: '', amount: '3000' });

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await fetch('/api/request');
        const data = await response.json();
        data.data.map((d) => {
          if (d.user_metadata.role === "advisor") {
            setUsers([...users, d.user_metadata]);
          }
        });
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };
    fetchAllUsers();
  }, []);

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handlePaymentSubmit = () => {
    // Simulate payment processing
    setTimeout(() => {
      alert(`Payment of $${paymentDetails.amount} for ${selectedUser?.name} is successful!`);
      setIsModalOpen(false);
      setPaymentDetails({ name: '', cardNumber: '', amount: '' });
    }, 2000);
  };

  return (
    <div className="p-3 gap-3">
      {users.map((user) => (
        <Card className="max-w-auto p-5" key={user.id}>
          <CardHeader className="justify-between">
            <div className="flex gap-3">
              <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">{user?.name}</h4>
                <h5 className="text-small tracking-tight text-default-400">{user?.email}</h5>
              </div>
            </div>
            <Button
              className={" border-default-200 ml-9"}
              color="primary"
              radius="full"
              size="sm"
              variant="solid"
              onClick={() => handleOpenModal(user)}
            >
              Pay
            </Button>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-400">
            {user?.role}
          </CardBody>
        </Card>
      ))}

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background bg-opacity-50 text-foreground">
          <div className="bg-background p-6 rounded-lg w-96 shadow-lg relative border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Payment for {selectedUser?.name}</h3>
            <div className="mb-3">
              <label className="block text-sm font-medium">Name</label>
              <Input
                type="text"
                className="mt-1 w-full "
                value={paymentDetails.name}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, name: e.target.value })}
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium">Card Number</label>
              <Input
                type="text"
                className="mt-1 w-full  rounded-md"
                value={paymentDetails.cardNumber}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
                placeholder="Enter your card number"
              />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium">Amount</label>
              <Input
                type="text"
                className="mt-1 w-full rounded-md"
                value={paymentDetails.amount}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, amount: e.target.value })}
                placeholder="Enter amount"
              />
            </div>
            <div className="flex justify-end gap-3">
              <Button
                flat
                variant="light"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <Button variant="solid" color="primary" onClick={handlePaymentSubmit}>
                Pay ${paymentDetails.amount}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Follow;

