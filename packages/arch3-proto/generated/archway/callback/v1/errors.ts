/* eslint-disable */
/** ModuleErrors defines the module level error codes */
export enum ModuleErrors {
  /** ERR_UNKNOWN - ERR_UNKNOWN is the default error code */
  ERR_UNKNOWN = 0,
  /** ERR_OUT_OF_GAS - ERR_OUT_OF_GAS is the error code when the contract callback exceeds the gas limit allowed by the module */
  ERR_OUT_OF_GAS = 1,
  /** ERR_CONTRACT_EXECUTION_FAILED - ERR_CONTRACT_EXECUTION_FAILED is the error code when the contract callback execution fails */
  ERR_CONTRACT_EXECUTION_FAILED = 2,
  UNRECOGNIZED = -1,
}
export const ModuleErrorsAmino = ModuleErrors;
export function moduleErrorsFromJSON(object: any): ModuleErrors {
  switch (object) {
    case 0:
    case "ERR_UNKNOWN":
      return ModuleErrors.ERR_UNKNOWN;
    case 1:
    case "ERR_OUT_OF_GAS":
      return ModuleErrors.ERR_OUT_OF_GAS;
    case 2:
    case "ERR_CONTRACT_EXECUTION_FAILED":
      return ModuleErrors.ERR_CONTRACT_EXECUTION_FAILED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ModuleErrors.UNRECOGNIZED;
  }
}
export function moduleErrorsToJSON(object: ModuleErrors): string {
  switch (object) {
    case ModuleErrors.ERR_UNKNOWN:
      return "ERR_UNKNOWN";
    case ModuleErrors.ERR_OUT_OF_GAS:
      return "ERR_OUT_OF_GAS";
    case ModuleErrors.ERR_CONTRACT_EXECUTION_FAILED:
      return "ERR_CONTRACT_EXECUTION_FAILED";
    case ModuleErrors.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}