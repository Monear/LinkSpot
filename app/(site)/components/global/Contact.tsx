// components/Contact.tsx
import React from 'react';

type ContactProps = {
  className?: string;
};

export default function Contact({ className }: ContactProps) {
    return (
        <div className={className}>
            <h1>Contact Information</h1>
            <p>Name: Your Name</p>
            <p>Email: your-email@example.com</p>
            <p>Phone: 123-456-7890</p>
        </div>
    );
}