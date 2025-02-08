import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";
import { Container } from "./Container";

type SectionContainerProps = {
  padded?: boolean;
  containerClassName?: string;
};

export const SectionContainer = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & SectionContainerProps
>(
  (
    { className, children, padded = false, containerClassName, ...props },
    ref,
  ) => {
    return (
      <div className={cn("relative h-full w-full", containerClassName)}>
        <Container
          ref={ref}
          className={cn("pt-10", className, padded ? "px-4" : "")}
          {...props}
        >
          {children}
        </Container>
      </div>
    );
  },
);

SectionContainer.displayName = "SectionContainer";
