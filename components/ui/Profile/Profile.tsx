import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../card/card";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar/avatar";
import { Badge } from "../badge/badge";
import { Button } from "../button/button";
import { MapPin } from 'lucide-react';

interface ProfileProps {
  profileImg?: string;
  fullName: string;
  location: string;
  description?: string;
}

/**
 * the component description will be used in the storybook docs
 */
export const Profile = ({
  profileImg,
  fullName,
  location,
  description,
  ...props
}: ProfileProps) => {

  const [availability, setAvailability] = useState(false);

  const availabilityStatus = availability ? "Available" : "Unavailable";
  const availabilityStatusEditMode = availability ? "Off the Clock" : "Ready to Work";
  const availabilityStatusColor = availability ? "bg-green-100" : "";

  return (
    <Card className="overflow-hidden max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
      <CardHeader>
        <Avatar className="mx-auto w-32 h-32 border-4 border-blue-100">
          <AvatarImage src={profileImg} alt="user profile image" />
          <AvatarFallback>
            {fullName.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="m-2 text-center">
          <CardTitle className="text-xl">{fullName}</CardTitle>
        </div>
        <div className="flex justify-center">
          <Badge variant="secondary" data-testid="availability-badge" className={availabilityStatusColor}>{availabilityStatus}</Badge>
        </div>
        <CardDescription className="flex justify-center gap-1">
        <MapPin size="18"/>
          {location}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-gray-500">
      {description}
      </CardContent>
      <CardFooter className="flex justify-center">
          <Button data-testid="availability-toggle" onClick={() => setAvailability(!availability)}>{availabilityStatusEditMode}</Button>
      </CardFooter>
    </Card>
  );
};
