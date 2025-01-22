import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export function FreeDemo({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
    const [formData, setFormData] = useState<{
        firstName: string;
        email: string;
        phone: string;
        courses: string[];
        consent: boolean;
    }>({
        firstName: "",
        email: "",
        phone: "",
        courses: [],
        consent: false,
    });

    const [errors, setErrors] = useState<{
        firstName: string;
        email: string;
        phone: string;
        courses: string;
        consent: string;
    }>({
        firstName: "",
        email: "",
        phone: "",
        courses: "",
        consent: "",
    });

    const validate = () => {
        const newErrors = {
            firstName: formData.firstName.trim() ? "" : "First name is required.",
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                ? ""
                : "A valid email is required.",
            phone: formData.phone.trim() ? "" : "Phone number is required.",
            courses: formData.courses.length > 0 ? "" : "At least one course must be selected.",
            consent: formData.consent ? "" : "You must provide consent.",
        };
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleCourseChange = (course: string, isChecked: boolean) => {
        setFormData((prevData) => ({
            ...prevData,
            courses: isChecked
                ? [...prevData.courses, course]
                : prevData.courses.filter((c) => c !== course),
        }));
    };

    const handleSubmit = async(e: React.FormEvent) => {
        // e.preventDefault();
        // if (validate()) {
        //     console.log("Form Submitted:", formData);
        //     setIsOpen(false); // Close the popup on successful submission
        // }
        e.preventDefault();
        if (validate()) {
            try {
                const response = await fetch("/api/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    alert("Form submitted successfully!");
                    setIsOpen(false);
                } else {
                    alert("Failed to submit the form. Please try again.");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                alert("An error occurred. Please try again.");
            }
            console.log("Form Submitted:", formData);
            setIsOpen(false); // Close the popup on successful submission
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl shadow-lg max-w-lg w-full">
                {/* Header */}
                <div className="bg-[#764f94] text-white p-4 flex justify-between items-center rounded-t-xl">
                    <h2 className="text-lg font-bold">Just One Step Away!</h2>
                    <button
                        className="text-white text-xl font-bold"
                        onClick={() => setIsOpen(false)}
                    >
                        &times;
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    <p className="text-gray-700 mb-4">
                        Our Experts require more information to assist you in a better way.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* First Name */}
                        <div>
                            <Label htmlFor="firstName">Full Name*</Label>
                            <Input
                                id="firstName"
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                aria-required="true"
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-sm">{errors.firstName}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <Label htmlFor="email">Email*</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Enter your email"
                                aria-required="true"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email}</p>
                            )}
                        </div>

                        {/* Phone Number */}
                        <div>
                            <Label htmlFor="phone">Phone Number*</Label>
                            <PhoneInput
                                country="in"
                                value={formData.phone}
                                onChange={(value) =>
                                    setFormData((prevData) => ({ ...prevData, phone: value }))
                                }
                                inputProps={{
                                    name: "phone",
                                    required: true,
                                }}
                                containerClass="phone-input-container w-full"
                                inputClass="w-full border border-gray-300 rounded-lg p-2"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm">{errors.phone}</p>
                            )}
                        </div>

                        {/* Courses */}
                        <div>
                            <Label>Select Courses*</Label>
                            <div className="space-y-2">
                                {["IB", "IGCSE", "SAT", "GMAT", "GRE"].map((course) => (
                                    <div key={course} className="flex items-center space-x-2">
                                        <input title="checkbox"
                                            type="checkbox"
                                            id={course}
                                            name={course}
                                            checked={formData.courses.includes(course)}
                                            onChange={(e) =>
                                                handleCourseChange(course, e.target.checked)
                                            }
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                        />
                                        <Label htmlFor={course} className="text-gray-700">
                                            {course}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                            {errors.courses && (
                                <p className="text-red-500 text-sm">{errors.courses}</p>
                            )}
                        </div>

                        {/* Consent */}
                        <div className="flex items-start space-x-2">
                            <input title="checkbox"
                                type="checkbox"
                                id="consent"
                                name="consent"
                                checked={formData.consent}
                                onChange={(e) =>
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        consent: e.target.checked,
                                    }))
                                }
                                className="form-checkbox h-5 w-5 text-blue-600"
                            />
                            <Label htmlFor="consent" className="text-sm text-gray-700">
                                I authorize Projectile45 Review to contact me even if my number
                                is registered with DND to assist with my enquiry and get regular
                                updates through SMS/WhatsApp.
                            </Label>
                        </div>
                        {errors.consent && (
                            <p className="text-red-500 text-sm">{errors.consent}</p>
                        )}

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full bg-[#091987] text-white font-semibold py-2 rounded-lg shadow-md hover:bg-[#0A2BAF] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
