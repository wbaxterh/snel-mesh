// src/pages/contact.tsx
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState<{
		type: "success" | "error" | null;
		message: string;
	}>({ type: null, message: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	const validateForm = () => {
		if (!formData.email.includes("@")) {
			setStatus({
				type: "error",
				message: "Please enter a valid email address",
			});
			return false;
		}
		if (formData.message.length < 10) {
			setStatus({
				type: "error",
				message: "Message must be at least 10 characters long",
			});
			return false;
		}
		return true;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;
		setIsSubmitting(true);

		try {
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				{
					from_name: formData.name,
					from_email: formData.email,
					message: formData.message,
					to_email: "snelcoin@gmail.com",
				},
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
			);

			setStatus({
				type: "success",
				message: "Thank you for your message! We will get back to you soon.",
			});
			setShowSuccess(true);
			setTimeout(() => setShowSuccess(false), 3000);
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			setStatus({
				type: "error",
				message: "Oops! Something went wrong. Please try again later.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className='min-h-screen bg-secondary py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-2xl mx-auto'>
				<div className='bg-silver p-8 shadow-lg rounded-lg'>
					<h1 className='text-3xl font-bold text-black mb-8 text-center'>
						Get in Touch
					</h1>

					{status.type && (
						<div
							className={`p-4 rounded-md mb-6 ${
								status.type === "success"
									? "bg-green-50 text-green-800"
									: "bg-red-50 text-red-800"
							}`}
						>
							{status.message}
						</div>
					)}

					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-black'
							>
								Name
							</label>
							<input
								type='text'
								id='name'
								required
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
							/>
						</div>

						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-black'
							>
								Email
							</label>
							<input
								type='email'
								id='email'
								required
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
							/>
						</div>

						<div>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-black'
							>
								Message
							</label>
							<textarea
								id='message'
								required
								rows={5}
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
								className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500'
							/>
						</div>

						<button
							type='submit'
							disabled={isSubmitting}
							className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black 
                ${isSubmitting ? "bg-gray-400" : "bg-primary hover:opacity-90"}
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200`}
						>
							{isSubmitting ? (
								<div className='flex items-center'>
									<svg
										className='animate-spin -ml-1 mr-3 h-5 w-5 text-black'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
									>
										<circle
											className='opacity-25'
											cx='12'
											cy='12'
											r='10'
											stroke='currentColor'
											strokeWidth='4'
										></circle>
										<path
											className='opacity-75'
											fill='currentColor'
											d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
										></path>
									</svg>
									Sending...
								</div>
							) : (
								"Send Message"
							)}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
