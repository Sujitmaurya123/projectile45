import { useState } from "react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";


export function FreeDemo({
    
    setIsOpen,
}: {
    
    setIsOpen: (open: boolean) => void;
}) {
     // Popup is open by default for demo purposes
      const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        countryCode: "India (+91)",
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

    return(
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 ">
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
                        Our Experts require more information to assist you in a better
                        way.
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

                        {/* Country Code & Mobile Number */}
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <Label htmlFor="countryCode">Country Code</Label>
                                <Select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onValueChange={(value) =>
                                        setFormData((prevData) => ({
                                            ...prevData,
                                            countryCode: value,
                                        }))
                                    }
                                    required
                                // className="w-full p-2 border rounded-lg text-gray-700"
                                >
                                    <SelectTrigger
                                        id="countryCode"
                                        className="w-full p-2 text-gray-700 bg-white border border-gray-300 rounded-lg"
                                    >
                                        {formData.countryCode || "Select a country code"}
                                    </SelectTrigger>
                                    <SelectContent className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                                        <SelectItem
                                            value="India (+91)"
                                            className="p-2 text-gray-700 hover:bg-gray-200"
                                        >
                                            India (+91)
                                        </SelectItem>
                                        <SelectItem
                                            value="USA (+1)"
                                            className="p-2 text-gray-700 hover:bg-gray-200"
                                        >
                                            USA (+1)
                                        </SelectItem>
                                        <SelectItem
                                            value="UK (+44)"
                                            className="p-2 text-gray-700 hover:bg-gray-200"
                                        >
                                            UK (+44)
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="w-1/2">
                                <Label htmlFor="mobile">Mobile Number*</Label>
                                <Input
                                    id="mobile"
                                    type="tel"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    placeholder="Enter your mobile number"
                                    required
                                />
                            </div>
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
                                        value="none"
                                        className="p-2 text-gray-700 hover:bg-gray-200"
                                    >
                                        Choose a course
                                    </SelectItem>
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
                                I authorize Projectile45 Review to contact me even
                                if my number is registered with DND to assist with my
                                enquiry and get regular updates through SMS/Whatsapp.
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
    )
}