export type MotionProfile = {
  reduced: boolean;
  lowPower: boolean;
  coarsePointer: boolean;
  intense: boolean;
};

function getDeviceMemory(): number {
  const nav = navigator as Navigator & { deviceMemory?: number };
  return nav.deviceMemory ?? 8;
}

export function getMotionProfile(): MotionProfile {
  if (typeof window === "undefined") {
    return {
      reduced: false,
      lowPower: false,
      coarsePointer: false,
      intense: true,
    };
  }

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const lowPower = coarsePointer || navigator.hardwareConcurrency <= 6 || getDeviceMemory() <= 8;

  return {
    reduced,
    lowPower,
    coarsePointer,
    intense: !reduced && !lowPower,
  };
}

export function applyMotionDataAttributes(profile: MotionProfile) {
  const root = document.documentElement;
  root.dataset.motion = profile.reduced ? "reduced" : profile.lowPower ? "low" : "high";
  root.dataset.pointer = profile.coarsePointer ? "coarse" : "fine";
}
