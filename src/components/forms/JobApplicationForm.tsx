'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
};

type Props = { jobId: string; jobTitle: string };

export function JobApplicationForm({ jobId, jobTitle }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // In production: upload CV to Firebase Storage, then save application to Firestore
    console.log({ jobId, jobTitle, ...data, cvFile: file?.name });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mt-4 rounded-lg bg-primary-50 p-4 text-sm text-primary-800">
        Thank you for applying. We will review your application and get back to you.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full name *
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
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone *
        </label>
        <input
          id="phone"
          type="tel"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          {...register('phone', { required: 'Phone is required' })}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">CV / Resume *</label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded file:border-0 file:bg-primary-50 file:px-4 file:py-2 file:text-primary-700"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        <p className="mt-1 text-xs text-gray-500">PDF or Word, max 5MB</p>
      </div>
      <div>
        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
          Cover letter (optional)
        </label>
        <textarea
          id="coverLetter"
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          {...register('coverLetter')}
        />
      </div>
      <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
        {isSubmitting ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
}
