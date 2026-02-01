'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const serviceOptions = [
  'Unified Communications',
  'IT Services',
  'Networks (LAN/WLAN)',
  'Datacenter',
  'Cybersecurity',
  'NOC/SOC',
  'CCTV & Physical Security',
  'Other',
];

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-primary-50 p-6 text-primary-800">
        Thank you for your inquiry. Our team will review and respond shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name *
        </label>
        <input
          id="name"
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email *
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
          Company / Organization
        </label>
        <input
          id="company"
          type="text"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          {...register('company')}
        />
      </div>
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700">
          Service of interest *
        </label>
        <select
          id="service"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          {...register('service', { required: 'Please select a service' })}
        >
          <option value="">Select...</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message / Requirements *
        </label>
        <textarea
          id="message"
          rows={5}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </button>
    </form>
  );
}
