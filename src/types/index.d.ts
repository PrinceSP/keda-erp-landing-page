import React from "react"

export interface BtnProps {
  id?: string | undefined;
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClass?: string;
  color?: string;
  radius?: string;
  padding?: string;
  size?: string;
  family?: string;
  onClick?: () => void;
}

export interface itemProps {
  bg: string;
  color: string;
  img: string;
  tier: string;
  price: string;
  desc: string;
  features: string[];
}