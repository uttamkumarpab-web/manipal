import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm({ onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    program: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    e.preventDefault();

    if (!formData.name || !formData.mobile || !formData.email || !formData.program) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1️⃣ Save form data to MongoDB via your backend
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      
console.log("Response status:", response.status);
const text = await response.text();
console.log("Raw response text:", text);

      if (response.ok) {
        // 2️⃣ Send email using EmailJS (frontend)
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          
          {
            name: formData.name,
            mobile: formData.mobile,
            email: formData.email,
           
            city: formData.city,
            program: formData.program,
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        alert("✅ Your enquiry has been submitted and email sent successfully!");

        // Reset form
        setFormData({
          name: "",
          mobile: "",
          email: "",
          city: "",
          program: "",
        });

        // Optional callback
        if (onSubmitSuccess) onSubmitSuccess();
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (error) {
      alert("⚠️ Failed to submit or send email. Try again later.");
    } finally {
      setIsSubmitting(false);
       
    }
  };



  return (
    <div className="relative z-10 bg-[#ffe3d5]/90 border border-[#F97316]/30 rounded-md p-6 md:p-8 w-[80%] max-w-md mx-auto md:mr-16 my-10 shadow-lg">
      <h3 className="text-2xl font-bold text-[#111827] text-center mb-6">
        Enquire Now
      </h3>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]"
          required
        />

        {/* Mobile */}
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile *"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]"
          required
        />

        {/* City */}
        <input
          type="text"
          name="city"
          placeholder="City Name"
          value={formData.city}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]"
        />

        {/* Program */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Choose a Program:
          </label>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            required
          >
            <option value="">--Select--</option>
            <option value="Online MBA">Online MBA</option>
            <option value="Online MCA">Online MCA</option>
            <option value="Online MA-JMC">Online MA-JMC</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-[#F97316] text-white font-semibold py-2 rounded-md transition ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-[#ea580c]"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
