"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";

export default function ScheduleDemo({
  variant,
  buttonText = "Schedule Demo",
}: {
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  buttonText?: string;
}) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    companySize: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      companySize: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xpwdapjp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormData({
          email: "",
          companyName: "",
          companySize: "",
          message: "",
        });

        toast("Form submitted successfully!", {
          description: "Thank you! Your message has been sent successfully.",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
        setIsSubmitting(false);
        setOpen(false);
        if (typeof window !== "undefined") {
          window.open(
            "https://tidycal.com/demitmarvie/book-a-call-with-marvie",
            "_blank"
          );
        }
      } else {
        setIsSubmitting(false);
        toast("Submission failed!", {
          description: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      toast("Submission failed!", {
        description:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant}>{buttonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] z-[9999]">
        <DialogHeader>
          <DialogTitle>{buttonText}</DialogTitle>
          <DialogDescription>
            {buttonText === "Schedule Demo"
              ? "Fill out this form to schedule a demo with our team."
              : "Fill out this form to get in touch with our team"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <Card className="border-none shadow-none p-0 mt-3">
            <CardContent className="p-0 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Work email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companySize">Company Size</Label>
                <Select
                  value={formData.companySize}
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger id="companySize" className="w-full">
                    <SelectValue placeholder="Choose between 1-5, 6-50, 51-250, >250" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5</SelectItem>
                    <SelectItem value="6-50">6-50</SelectItem>
                    <SelectItem value="51-250">51-250</SelectItem>
                    <SelectItem value=">250">&gt;250</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="max-h-40"
                />
              </div>
            </CardContent>
            <CardFooter className="p-0">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </DialogContent>
    </Dialog>
  );
}
