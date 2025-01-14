import { useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export function FreeDemo({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        course: "",
        consent: false,
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted: ", formData);
        setIsOpen(false); // Close the popup on submission
    };

    const handleCheckboxChange = (checked: boolean) => {
        setFormData({
            ...formData,
            consent: checked,
        });
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
                        {/* First Name & Last Name */}
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <Label htmlFor="firstName">First Name*</Label>
                                <Input
                                    id="firstName"
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    placeholder="First Name"
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <Label htmlFor="lastName">Last Name*</Label>
                                <Input
                                    id="lastName"
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Last Name"
                                    required
                                />
                            </div>
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
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <Label htmlFor="phone">Phone Number*</Label>
                            <PhoneInput
                                country="in" // Default country code (India)
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
                        </div>

                        {/* Select Course */}
                        <div>
                            <Label htmlFor="course">Select Course*</Label>
                            <Select
                                name="course"
                                value={formData.course || ""} // Ensure it defaults to an empty string if no value
                                onValueChange={(value) =>
                                    setFormData((prevData) => ({
                                        ...prevData,
                                        course: value,
                                    }))
                                }
                                required
                            >
                                <SelectTrigger
                                    id="course"
                                    className="w-full p-2 text-gray-700 bg-white border border-gray-300 rounded-lg"
                                >
                                    {formData.course || "Choose a course"}
                                </SelectTrigger>
                                <SelectContent className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                                    <SelectItem
                                        value="IB"
                                        className="p-2 text-gray-700 hover:bg-gray-200"
                                    >
                                        IB
                                    </SelectItem>
                                    <SelectItem
                                        value="IGCSE"
                                        className="p-2 text-gray-700 hover:bg-gray-200"
                                    >
                                        IGCSE
                                    </SelectItem>
                                    <SelectItem
                                        value="SAT"
                                        className="p-2 text-gray-700 hover:bg-gray-200"
                                    >
                                        SAT
                                    </SelectItem>
                                    <SelectItem
                                        value="GMAT"
                                        className="p-2 text-gray-700 hover:bg-gray-200"
                                    >
                                        GMAT
                                    </SelectItem>
                                    <SelectItem
                                        value="GRE"
                                        className="p-2 text-gray-700 hover:bg-gray-200"
                                    >
                                        GRE
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Consent Checkbox */}
                        <div className="flex items-start space-x-2">
                            <Checkbox
                                id="consent"
                                name="consent"
                                checked={formData.consent}
                                onCheckedChange={handleCheckboxChange}
                            />
                            <Label htmlFor="consent" className="text-sm text-gray-700">
                                I authorize Projectile45 Review to contact me even if my number
                                is registered with DND to assist with my enquiry and get regular
                                updates through SMS/Whatsapp.
                            </Label>
                        </div>

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
