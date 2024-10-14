"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import React from "react";

const FormSection = () => {
  return (
    <section>
      <div className="bg-lime-50 rounded-xl border border-lime-300 flex flex-col gap-12 p-7">
        <form className="space-y-5">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" id="name" placeholder="Enter your Name" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Enter your Email" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input type="tel" id="phone" placeholder="Enter your Number" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea placeholder="Enter your Message" />
            <div className="text-end mt-2">Max: 250 Chars</div>
          </div>
          <Button className="w-full">Send Message</Button>
        </form>

        <div className="space-y-5 justify-center items-center flex flex-col">
          <div className="h-52 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12694.408842965073!2d-74.0060!3d40.7128!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bc8c6bb%3A0xbac8e8e7dd88987b!2sOne%20World%20Trade%20Center%2C%20NYC!5e0!3m2!1sen!2sus!4v1631694311234!5m2!1sen!2sus"
            ></iframe>
          </div>
          <div className="space-x-3">
            <Button size={"icon"}>
              <FacebookIcon />
            </Button>
            <Button size={"icon"}>
              <TwitterIcon />
            </Button>
            <Button size={"icon"}>
              <LinkedinIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
