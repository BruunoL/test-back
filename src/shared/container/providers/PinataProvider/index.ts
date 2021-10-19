import { container } from "tsyringe";
import { PinataProvider } from "./implementations/PinataProvider";
import { IPinataProvider } from "./IPinataProvider";

container.registerSingleton<IPinataProvider>(
  "PinataProvider",
  PinataProvider
);