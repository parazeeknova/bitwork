"use client";

import { Button } from "@bitwork/ui/components/button";
import { Card } from "@bitwork/ui/components/card";
import { Checkbox } from "@bitwork/ui/components/checkbox";
import { Field, FieldGroup } from "@bitwork/ui/components/field";
import { Input } from "@bitwork/ui/components/input";
import { Label } from "@bitwork/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@bitwork/ui/components/select";
import { Textarea } from "@bitwork/ui/components/textarea";
import axios from "axios";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Check,
  MapPin,
  PenTool,
  Send,
  User,
} from "lucide-react";
import { useEffect, useState } from "react";

interface State {
  name: string;
  state_code: string;
}

interface StatesResponse {
  data: {
    name: string;
    iso3: string;
    states: State[];
  };
  error: boolean;
  msg: string;
}

interface CitiesResponse {
  data: string[];
  error: boolean;
  msg: string;
}

interface FormData {
  city: string;
  description: string;
  duration: string;
  hasTimeline: boolean;
  hourlyRate: string;
  state: string;
  title: string;
  userType: string;
}

interface PostJobFormProps {
  onClose?: () => void;
  onSubmit?: (data: FormData) => void;
}

const STAGES = [
  {
    id: 1,
    title: "Role Type",
    icon: User,
    description: "What are you looking for?",
  },
  {
    id: 2,
    title: "Location",
    icon: MapPin,
    description: "Where is this opportunity?",
  },
  {
    id: 3,
    title: "Details",
    icon: PenTool,
    description: "Tell us about the work",
  },
  { id: 4, title: "Review", icon: Send, description: "Review and post" },
];

export default function PostJobForm({ onSubmit, onClose }: PostJobFormProps) {
  const [currentStage, setCurrentStage] = useState(1);
  const [completedStages, setCompletedStages] = useState<number[]>([]);

  const [formData, setFormData] = useState({
    userType: "",
    state: "",
    city: "",
    title: "",
    hourlyRate: "",
    description: "",
    hasTimeline: false,
    duration: "",
  });

  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [loadingStates, setLoadingStates] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);

  // Fetch Indian states on component mount just incase the users cant spell their state out
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.post<StatesResponse>(
          "https://countriesnow.space/api/v0.1/countries/states",
          { country: "india" }
        );

        if (response.data && !response.data.error) {
          setStates(response.data.data.states);
        }
      } catch (error) {
        console.error("Error fetching states:", error);
      } finally {
        setLoadingStates(false);
      }
    };

    fetchStates();
  }, []);

  // Fetch cities when state changes cuz the users might not know which city belongs in which state
  useEffect(() => {
    if (formData.state) {
      const fetchCities = async () => {
        setLoadingCities(true);
        try {
          const response = await axios.post<CitiesResponse>(
            "https://countriesnow.space/api/v0.1/countries/state/cities",
            {
              country: "india",
              state: formData.state,
            }
          );

          if (response.data && !response.data.error) {
            setCities(response.data.data);
          }
        } catch (error) {
          console.error("Error fetching cities:", error);
        } finally {
          setLoadingCities(false);
        }
      };

      fetchCities();
    } else {
      setCities([]);
    }
  }, [formData.state]);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      // Reset city when state changes cuz gaziabad cannot be in TN and you cant trust the users
      ...(field === "state" && { city: "" }),
    }));
  };

  const handleStringInputChange = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      hasTimeline: checked,
      // Reset duration if timeline is disabled since we dont want timeline to be displayed if we dont have one now do we
      ...(checked === false && { duration: "" }),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onSubmit?.(formData);
  };

  const isStageValid = (stage: number): boolean => {
    switch (stage) {
      case 1:
        return formData.userType !== "";
      case 2:
        return formData.state !== "" && formData.city !== "";
      case 3:
        return (
          formData.title !== "" &&
          formData.hourlyRate !== "" &&
          formData.description !== "" &&
          (!formData.hasTimeline || formData.duration !== "")
        );
      case 4:
        return true; // Review stage is always valid at this point gng
      default:
        return false;
    }
  };

  const nextStage = () => {
    if (currentStage < 4 && isStageValid(currentStage)) {
      // Mark current stage as completed
      if (!completedStages.includes(currentStage)) {
        setCompletedStages((prev) => [...prev, currentStage]);
      }
      setCurrentStage(currentStage + 1);
    }
  };

  const prevStage = () => {
    if (currentStage > 1) {
      // Remove current stage from completed stages when going back
      setCompletedStages((prev) =>
        prev.filter((stage) => stage !== currentStage)
      );
      setCurrentStage(currentStage - 1);
    }
  };

  const goToStage = (stage: number) => {
    if (stage <= currentStage || completedStages.includes(stage - 1)) {
      setCurrentStage(stage);
      // When going backwards, remove all stages >= the target stage from completed
      if (stage < currentStage) {
        setCompletedStages((prev) => prev.filter((stageId) => stageId < stage));
      }
    }
  };

  const getCityPlaceholder = () => {
    if (!formData.state) {
      return "Select a state first";
    }

    if (loadingCities) {
      return "Loading cities...";
    }

    return "Select a city";
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
        <Label>I am looking to:</Label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            className={`flex flex-col items-center gap-3 rounded-lg border-2 p-4 transition-all duration-200 ${
              formData.userType === "professional"
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-200 bg-white text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50"
            }`}
            onClick={() => handleInputChange("userType", "professional")}
            type="button"
          >
            <Briefcase className="h-8 w-8" />
            <span className="font-medium text-sm">Hire a Professional</span>
          </button>
          <button
            className={`flex flex-col items-center gap-3 rounded-lg border-2 p-4 transition-all duration-200 ${
              formData.userType === "employment"
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-200 bg-white text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50"
            }`}
            onClick={() => handleInputChange("userType", "employment")}
            type="button"
          >
            <User className="h-8 w-8" />
            <span className="font-medium text-sm">Find Work</span>
          </button>
        </div>
      </Field>
    </FieldGroup>
  );

  const renderStage2 = () => (
    <FieldGroup>
      <Field>
        <Label htmlFor="state">State</Label>
        <Select
          disabled={loadingStates}
          onValueChange={(value) => handleInputChange("state", value || "")}
          value={formData.state}
        >
          <SelectTrigger>
            <SelectValue
              placeholder={
                loadingStates ? "Loading states..." : "Select a state"
              }
            />
          </SelectTrigger>
          <SelectContent>
            {states.map((state) => (
              <SelectItem key={state.state_code} value={state.name}>
                {state.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field>
        <Label htmlFor="city">City</Label>
        <Select
          disabled={!formData.state || loadingCities}
          onValueChange={(value) => handleInputChange("city", value || "")}
          value={formData.city}
        >
          <SelectTrigger>
            <SelectValue placeholder={getCityPlaceholder()} />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
    </FieldGroup>
  );

  const renderStage3 = () => (
    <FieldGroup>
      <Field>
        <Label htmlFor="title">What The Job Is</Label>
        <Input
          id="title"
          onChange={(e) => handleStringInputChange("title", e.target.value)}
          placeholder="e.g., Full Stack Developer, UI/UX Designer, etc."
          type="text"
          value={formData.title}
        />
      </Field>
      <Field>
        <Label htmlFor="hourlyRate">Hourly Rate</Label>
        <Input
          id="hourlyRate"
          min="0"
          onChange={(e) =>
            handleStringInputChange("hourlyRate", e.target.value)
          }
          placeholder="e.g., Rs.50/hour or Rs.75/hour"
          step="0.01"
          type="number"
          value={formData.hourlyRate}
        />
      </Field>
      <Field>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          onChange={(e) =>
            handleStringInputChange("description", e.target.value)
          }
          placeholder="Describe the job, required skills, experience level, project details, etc."
          rows={6}
          value={formData.description}
        />
      </Field>
      <Field>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={formData.hasTimeline}
            id="timeline-checkbox"
            onCheckedChange={(checked) =>
              handleCheckboxChange(checked as boolean)
            }
          />
          <Label className="m-0" htmlFor="timeline-checkbox">
            Is there an expected timeline for completion?
          </Label>
        </div>
      </Field>
      {formData.hasTimeline && (
        <Field>
          <Label htmlFor="duration">Duration</Label>
          <Input
            id="duration"
            onChange={(e) =>
              handleStringInputChange("duration", e.target.value)
            }
            placeholder="e.g., 2 weeks, 1 month, 3 months"
            type="text"
            value={formData.duration}
          />
        </Field>
      )}
    </FieldGroup>
  );

  const renderStage4 = () => (
    <div className="space-y-6">
      <div className="pb-4 text-center">
        <h3 className="mb-2 font-medium text-lg">Review Your Job Post</h3>
        <p className="text-zinc-600">
          Please review your information before submitting
        </p>
      </div>
      <div className="space-y-4 rounded-lg bg-zinc-50 p-6">
        <div>
          <h4 className="mb-1 font-medium text-zinc-900">Role Type</h4>
          <p className="text-zinc-600">
            {formData.userType === "professional"
              ? "Looking to hire a professional"
              : "Looking for work"}
          </p>
        </div>
        <div>
          <h4 className="mb-1 font-medium text-zinc-900">Job Title</h4>
          <p className="text-zinc-600">{formData.title}</p>
        </div>
        <div>
          <h4 className="mb-1 font-medium text-zinc-900">Location</h4>
          <p className="text-zinc-600">
            {formData.city}, {formData.state}
          </p>
        </div>
        <div>
          <h4 className="mb-1 font-medium text-zinc-900">Rate</h4>
          <p className="text-zinc-600">{formData.hourlyRate}</p>
        </div>
        <div>
          <h4 className="mb-1 font-medium text-zinc-900">Description</h4>
          <p className="text-zinc-600">{formData.description}</p>
        </div>
        {formData.hasTimeline && (
          <div>
            <h4 className="mb-1 font-medium text-zinc-900">Timeline</h4>
            <p className="text-zinc-600">{formData.duration}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3 pt-4 sm:flex-row">
        <Button className="w-full flex-1 sm:w-auto" onClick={handleSubmit}>
          <Send className="mr-2 h-4 w-4" />
          Post Job
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
                // Only show tick for completed stages that are not current
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

export { PostJobForm };
