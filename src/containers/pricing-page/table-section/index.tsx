import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";
import React from "react";

const features = [
  "Personalized Nutrition Plan",
  "Mobile App Access",
  "Email Support",
  "One on One Video Consultations",
  "Recipe Recommendations and Meal Planning",
  "Priority Support",
  "Educational Resources and Guides",
  "Advanced Progress Tracking Tools",
  "Customized Meal Plans and Recipe Suggestions",
  "Phone Support",
];

const plans = ["Base", "Plus", "Pro", "Enterprise"];

const featureAvailability = [
  [true, true, true, true],
  [false, true, true, true],
  [false, true, true, true],
  [false, false, true, true],
  [false, false, true, true],
  [false, false, true, true],
  [false, false, false, true],
  [false, false, false, true],
  [false, false, false, true],
  [false, false, false, true],
];
const TableSection = () => {
  return (
    <section className="overflow-x-auto py-5 bg-lime-50 rounded-lg border border-lime-300">
      <Table>
        <TableHeader>
          <TableRow className="border-none">
            <TableHead className="w-[200px] min-w-[200px] bg-lime-50 border-r border-lime-300 sticky left-0 z-20">
              <div className="bg-emerald-800 text-white px-5 py-3 rounded-md">
                Features
              </div>
            </TableHead>
            {plans.map((plan) => (
              <TableHead key={plan} className="text-center min-w-[120px]">
                <div className="bg-emerald-800 text-white px-5 py-3 rounded-md">
                  {plan}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, index) => (
            <TableRow key={feature} className="border-lime-300">
              <TableCell className="font-medium bg-lime-50 border-r border-lime-300 sticky left-0 z-10">
                {feature}
              </TableCell>
              {featureAvailability[index].map((isAvailable, planIndex) => (
                <TableCell key={planIndex} className="text-center">
                  {isAvailable ? (
                    <div className="size-10 grid justify-center items-center bg-lime-300 rounded-xl">
                      <Check className="size-6" />
                    </div>
                  ) : (
                    <div className="size-10 grid justify-center items-center bg-lime-100 rounded-xl">
                      <X className="size-5" />
                    </div>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default TableSection;
