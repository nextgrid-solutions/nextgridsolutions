"use client";

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Phone: "",
    projectBudget: "",
    projectType: "",
    otherProjectType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Sending enquiry...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Your enquiry has been sent!", { id: toastId });
        setFormData({
          name: "",
          email: "",
          Phone: "",
          projectBudget: "",
          projectType: "",
          otherProjectType: "",
          message: "",
        });
      } else {
        toast.error(result.error || "Something went wrong.", { id: toastId });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Failed to send enquiry. Try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const showOtherInput = formData.projectType === "other";

  return (
    <div className=" min-h-screen bg-white text-black flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full bg-white grid md:grid-cols-2 gap-40 mt-24">
        {/* Left Section */}
        <div className="space-y-8">
          <h2 className="text-6xl font-bold font-sans">Get a Quote!</h2>
          <p className="text-gray-900 text-medium">
            Fill up the form and our Team will get back to you within 24 hours.
          </p>
          <div className="space-y-4">
            <div className="flex font-sans items-center space-x-4">
              <Phone className="text-black" />
              <span> <a href="tel:+919664245743" className="hover:text-white transition-colors">
                  +91 96642 45743
                </a>
                <span> / </span>
                <a href="tel:+919321581121" className="hover:text-white transition-colors">
                  +91 93215 81121
                </a></span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-black" />
              <span>nextgrid.solutions@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-black" />
              <span>govandi,Mumbai-43</span>
            </div>
          </div>
          <div className="flex space-x-4 pt-4">
            <a href="#" className="bg-black p-2 rounded-full hover:bg-blue-500 transition">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="bg-black p-2 rounded-full hover:bg-blue-500 transition">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="bg-black p-2 rounded-full hover:bg-blue-500 transition">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="bg-black p-2 rounded-full hover:bg-blue-500 transition">
              <i className="fab fa-instagram" />
            </a>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe 
                  title="Office Location" 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d314.6033053528917!2d72.92176831020018!3d19.06480929275538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1747471992466!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
        </div>
        

        {/* Right Section - Form */}
        <form onSubmit={handleSubmit} className="p-8 pr-3 rounded-xl space-y-6  text-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-xl text-black font-700 font-sans">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-500 rounded-md p-2 text-black focus:border-black focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-xl font-sans font-700 text-black">Mail</label>
              <input
                type="email"
                name="email"
                placeholder="yourmail@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-500 rounded-md p-2 text-black focus:border-black focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-xl font-sans text-black font-700">Phone </label>
              <input
                type="text"
                name="Phone"
                placeholder="Enter Your Phone Number"
                value={formData.Phone}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-500 rounded-md p-2 text-black focus:border-black focus:outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-xl font-700 font-sans text-black">Project Budget (INR)</label>
              <input
                type="text"
                name="projectBudget"
                placeholder="Estimated budget in INR"
                value={formData.projectBudget}
                onChange={handleChange}
                className="w-full border-b border-gray-500 rounded-md p-2 text-black focus:border-black focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-xl font-sans text-black font-700">Project Type</label>
              <select
                name="projectType"
                className="w-full border-b border-gray-500 rounded-md p-2 text-black focus:border-black focus:outline-none bg-white"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="web development">Web Development</option>
                <option value="app development">App Development</option>
                {/* <option value="seo">SEO</option> */}
                <option value="logo design">Logo Design</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="other">Other</option>
              </select>
            </div>
            {showOtherInput && (
              <div>
                <label className="block mb-1 text-xl font-sans text-black font-700">Other Project Type</label>
                <input
                  type="text"
                  name="otherProjectType"
                  placeholder="Specify other project type"
                  value={formData.otherProjectType}
                  onChange={handleChange}
                  required={showOtherInput}
                  className="w-full border-b border-gray-500 rounded-md p-2 text-black focus:border-black focus:outline-none"
                />
              </div>
            )}
          </div>
          <div>
            <label className="block mb-1 text-xl font-sans text-black font-700">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full text-black border-b border-gray-500 rounded-md p-2 focus:border-black focus:outline-none bg-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black flex items-center space-x-2 disabled:bg-gray-500 disabled:text-gray-400 disabled:cursor-not-allowed"
            disabled={loading}
          >
            <Send size={18} />
            <span>{loading ? "Sending..." : "Send Message"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
