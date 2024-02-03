import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { rest } from 'msw'
import Index from "./index";

export default {
  title: "Page/Home",
  component: Index,
};

export const Success = {
    parameters: {
        msw: {
            handlers: [
              rest.get('http://localhost:3000/api/profiles', (req, res, ctx) => {
                return res(
                  ctx.json([
                    {
                      id: "1",
                      fullName: "DR. MSW",
                      location: "3 miles away",
                      description: "I'm a part-time dog walker in the North York area. Let me know if you need someone to walk your dog!",
                    }])
                )
              }),
            ]
          },
      },
};

export const Loading = {
    parameters: {
        msw: {
            handlers: [
              rest.get('http://localhost:3000/api/profiles', (req, res, ctx) => {
                return res(
                  ctx.delay(1000 * 3),
                  ctx.json([
                    {
                      id: "1",
                      fullName: "DR. MSW",
                      location: "3 miles away",
                      description: "I'm a part-time dog walker in the North York area. Let me know if you need someone to walk your dog!",
                    }])
                )
              }),
            ]
          },
      },
};

export const Empty = {
    parameters: {
        msw: {
            handlers: [
              rest.get('http://localhost:3000/api/profiles', (req, res, ctx) => {
                return res(
                  ctx.json([])
                )
              }),
            ]
          },
      },
};

export const Error = {
    parameters: {
        msw: {
            handlers: [
              rest.get('http://localhost:3000/api/profiles', (req, res, ctx) => {
                return res(
                  ctx.status(500)
                )
              }),
            ]
          },
      },
}

