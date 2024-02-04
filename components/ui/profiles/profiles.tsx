import React from "react";
import { Profile, ProfileProps } from "../profile/profile";

interface ProfilesProps {
  profiles: ProfileProps[];
}

export const Profiles = ({ profiles, ...props }: ProfilesProps) => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {profiles.length > 0 &&
                profiles.map((profile, index) => {
                  return (
                    <div key={index}>
                      <Profile {...profile} />
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
};
