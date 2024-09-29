
'use client';

import { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalContent, Button, Input, Checkbox, Textarea, ModalHeader, useDisclosure } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function CreatePost() {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('');
  const [published, setPublished] = useState(false);
  const [contact, setContact] = useState('');
  const [image, setImage] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('author_name', authorName);
    formData.append('author_role', authorRole);
    formData.append('published', published.toString());
    formData.append('contact', contact);
    if (image) formData.append('image', image);

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        router.push('/'); // Redirect after successful creation
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      onOpenChange() // Close modal after submission
    }
  };

  return (
    <div>
      {/* Button to open modal */}
      <Button onPress={onOpen}>
        Create Post
      </Button>

      {/* Modal for form */}
      <Modal
        closeButton
        aria-labelledby="modal-title"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalHeader>
          <h2 id="modal-title">Create a New Post</h2>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Input
              label="Title"
              fullWidth
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              label="Description"
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Input
              label="Author Name"
              fullWidth
              required
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
            <Input
              label="Author Role"
              fullWidth
              required
              value={authorRole}
              onChange={(e) => setAuthorRole(e.target.value)}
            />
            <Input
              label="Contact"
              fullWidth
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <Input
              label="Image"
              type="file"
              fullWidth
              onChange={(e) => setImage(e.target.files[0])}
            />
            <Checkbox
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            >
              Published
            </Checkbox>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => onOpenChange()}>
            Close
          </Button>
          <Button onClick={handleSubmit}>
            Submit
          </Button>
        </ModalFooter>
      </Modal>
    </div >
  );
}

