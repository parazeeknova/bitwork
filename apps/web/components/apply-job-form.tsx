"use client";

import { Button } from "@bitwork/ui/components/button";
import { Card } from "@bitwork/ui/components/card";
import { Checkbox } from "@bitwork/ui/components/checkbox";
import { Field, FieldGroup } from "@bitwork/ui/components/field";
import { Input } from "@bitwork/ui/components/input";
import { Label } from "@bitwork/ui/components/label";
import { Textarea } from "@bitwork/ui/components/textarea";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Check,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";

interface ApplicationFormData {
  fullName: string;
  phone: string;
  experience: string;
  availability: string;
  agreedToTerms: boolean;
}

interface ApplyJobFormProps {
  jobTitle?: string;
  onSubmit?: (data: ApplicationFormData) => void;
  onClose?: () => void;
}

const STAGES = [
  {
    id: 1,
    title: "Personal Info",
    icon: User,
    description: "Tell us about yourself",
  },
  {
    id: 2,
    title: "Experience",
    icon: Briefcase,
    description: "Share your background",
  },
  { id: 3, title: "Review", icon: Send, description: "Review and submit" },
];

export default function ApplyJobForm({
  jobTitle = "Position",
  onSubmit,
  onClose,
}: ApplyJobFormProps) {
  const [currentStage, setCurrentStage] = useState(1);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: "",
    phone: "",
    experience: "",
    availability: "",
    agreedToTerms: false,
  });

  const handleInputChange = (
    field: keyof ApplicationFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    onSubmit?.(formData);
  };

  const isStageValid = (stage: number): boolean => {
    switch (stage) {
      case 1:
        return formData.fullName !== "" && formData.phone !== "";
      case 2:
        return formData.experience !== "" && formData.availability !== "";
      case 3:
        return true;
      default:
        return false;
    }
  };

  const nextStage = () => {
    if (currentStage < 4 && isStageValid(currentStage)) {
      if (!completedStages.includes(currentStage)) {
        setCompletedStages((prev) => [...prev, currentStage]);
      }
      setCurrentStage(currentStage + 1);
    }
  };

  const prevStage = () => {
    if (currentStage > 1) {
      setCompletedStages((prev) =>
        prev.filter((stage) => stage !== currentStage)
      );
      setCurrentStage(currentStage - 1);
    }
  };

  const goToStage = (stage: number) => {
    if (stage <= currentStage || completedStages.includes(stage - 1)) {
      setCurrentStage(stage);
      if (stage < currentStage) {
        setCompletedStages((prev) => prev.filter((stageId) => stageId < stage));
      }
    }
  };

  const getStageButtonClasses = (
    shouldShowTick: boolean,
    isCurrent: boolean,
    isAccessible: boolean
  ) => {
    const baseClasses =
      "flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all sm:h-12 sm:w-12";

    if (shouldShowTick) {
      return `${baseClasses} border-green-500 bg-green-500 text-white hover:bg-green-600`;
    }

    if (isCurrent) {
      return `${baseClasses} border-zinc-900 bg-zinc-900 text-white`;
    }

    if (isAccessible) {
      return `${baseClasses} cursor-pointer border-zinc-300 bg-white text-zinc-600 hover:border-zinc-400 hover:bg-zinc-50`;
    }

    return `${baseClasses} cursor-not-allowed border-zinc-200 bg-zinc-100 text-zinc-400`;
  };

  const renderStage1 = () => (
    <FieldGroup>
      <Field>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          onChange={(e) => handleInputChange("fullName", e.target.value)}
          placeholder="e.g., Rajesh Kumar"
          type="text"
          value={formData.fullName}
        />
      </Field>
      <Field>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          onChange={(e) => handleInputChange("phone", e.target.value)}
          placeholder="e.g., +91 98765 43210"
          type="tel"
          value={formData.phone}
        />
      </Field>
    </FieldGroup>
  );

  const renderStage2 = () => (
    <FieldGroup>
      <Field>
        <Label htmlFor="experience">Relevant Experience</Label>
        <Textarea
          id="experience"
          onChange={(e) => handleInputChange("experience", e.target.value)}
          placeholder="Describe your relevant skills and experience for this role..."
          rows={6}
          value={formData.experience}
        />
      </Field>
      <Field>
        <Label htmlFor="availability">Availability</Label>
        <Input
          id="availability"
          onChange={(e) => handleInputChange("availability", e.target.value)}
          placeholder="e.g., Immediately, 2 weeks notice, weekends only"
          type="text"
          value={formData.availability}
        />
      </Field>
    </FieldGroup>
  );

  const renderStage3 = () => (
    <FieldGroup>
      <Field>
        <div className="flex items-start gap-2">
          <Checkbox
            checked={formData.agreedToTerms}
            id="terms-checkbox"
            onCheckedChange={(checked) =>
              handleInputChange("agreedToTerms", checked as boolean)
            }
          />
          <Label className="m-0 cursor-pointer" htmlFor="terms-checkbox">
            I confirm that all information provided is accurate and I agree to
            the terms and conditions of application.
          </Label>
        </div>
      </Field>
    </FieldGroup>
  );

  const renderStage4 = () => (
    <div className="space-y-6">
      <div className="pb-4 text-center">
        <h3 className="mb-2 font-medium text-lg">Review Your Application</h3>
        <p className="text-zinc-600">
          Please review your information before submitting
        </p>
      </div>
      <div className="space-y-4 rounded-lg bg-zinc-50 p-6">
        <div>
          <h4 className="mb-1 font-medium text-zinc-900">Applying For</h4>
          <p className="text-zinc-600">{jobTitle}</p>
        </div>
        <div>
          <h4 className="mb-1 font-medium text-zinc-900">Full Name</h4>
          <p className="text-zinc-600">{formData.fullName}</p>
        </div>
        <div>
          <h4 className="mb-1 font-medium text-zinc-900">Phone</h4>
          <p className="text-zinc-600">{formData.phone}</p>
        </div>
        <div>
          <h4 className="mb-1 font-medium text-zinc-900">Experience</h4>
          <p className="text-zinc-600">{formData.experience}</p>
        </div>
        <div>
          <h4 className="mb-1 font-medium text-zinc-900">Availability</h4>
          <p className="text-zinc-600">{formData.availability}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-4 sm:flex-row">
        <Button className="w-full flex-1 sm:w-auto" onClick={handleSubmit}>
          <Send className="mr-2 h-4 w-4" />
          Submit Application
        </Button>
        <Button
          className="w-full sm:w-auto"
          onClick={onClose}
          type="button"
          variant="outline"
        >
          Cancel
        </Button>
      </div>
    </div>
  );

  const renderStageContent = () => {
    switch (currentStage) {
      case 1:
        return renderStage1();
      case 2:
        return renderStage2();
      case 3:
        return renderStage3();
      case 4:
        return renderStage4();
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="mb-2 font-bold text-2xl text-zinc-900">
            Apply for {jobTitle}
          </h2>
          <p className="text-zinc-600">
            Complete the application form to express your interest
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-4 sm:mb-8">
          <div className="mb-2 flex items-center justify-center sm:mb-4">
            <div className="flex items-center">
              {STAGES.map((stage, index) => {
                const Icon = stage.icon;
                const isCompleted = completedStages.includes(stage.id);
                const isCurrent = currentStage === stage.id;
                const isAccessible =
                  stage.id <= currentStage ||
                  completedStages.includes(stage.id - 1);
                const shouldShowTick = isCompleted && !isCurrent;

                return (
                  <div className="flex items-center" key={stage.id}>
                    <button
                      className={getStageButtonClasses(
                        shouldShowTick,
                        isCurrent,
                        isAccessible
                      )}
                      disabled={!isAccessible}
                      onClick={() => isAccessible && goToStage(stage.id)}
                      type="button"
                    >
                      {shouldShowTick ? (
                        <Check className="h-3 w-3 sm:h-5 sm:w-5" />
                      ) : (
                        <Icon className="h-3 w-3 sm:h-5 sm:w-5" />
                      )}
                    </button>
                    {index < STAGES.length - 1 && (
                      <div
                        className={`mx-1 h-0.5 w-8 sm:mx-3 sm:w-16 ${
                          completedStages.includes(stage.id) &&
                          stage.id < currentStage
                            ? "bg-green-500"
                            : "bg-zinc-300"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-medium text-zinc-900">
              {STAGES[currentStage - 1]?.title}
            </h3>
            <p className="text-sm text-zinc-600">
              {STAGES[currentStage - 1]?.description}
            </p>
          </div>
        </div>

        {/* Form Content */}
        <Card>
          <div className="p-4 sm:p-8">
            <form onSubmit={(e) => e.preventDefault()}>
              {renderStageContent()}

              {/* Navigation Buttons */}
              {currentStage < 4 && (
                <div
                  className={`flex flex-col-reverse gap-3 pt-8 sm:flex-row sm:gap-0 ${
                    currentStage === 1 ? "sm:justify-end" : "sm:justify-between"
                  }`}
                >
                  {currentStage > 1 && (
                    <Button
                      className="w-full sm:w-auto"
                      onClick={prevStage}
                      type="button"
                      variant="outline"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                  )}
                  <Button
                    className="w-full sm:w-auto"
                    disabled={!isStageValid(currentStage)}
                    onClick={nextStage}
                    type="button"
                  >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}

              {currentStage === 4 && (
                <div className="flex pt-8">
                  <Button
                    className="w-full sm:w-auto"
                    onClick={prevStage}
                    type="button"
                    variant="outline"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                </div>
              )}
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}

export { ApplyJobForm };
