export type TEffectStatus = "error" | "success" | "warning" | "info" | null;

export interface IEffectPayload {
  status: TEffectStatus;
  message: string;
}

export interface IEffectsSliceState {
  effectData: {
    status: TEffectStatus;
    message: string;
  };
}
