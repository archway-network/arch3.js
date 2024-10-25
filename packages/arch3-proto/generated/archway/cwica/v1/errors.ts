/* eslint-disable */
/** ModuleErrors defines the module level error codes */
export enum ModuleErrors {
  /** ERR_UNKNOWN - ERR_UNKNOWN is the default error code */
  ERR_UNKNOWN = 0,
  /** ERR_PACKET_TIMEOUT - ERR_PACKET_TIMEOUT is the error code for packet timeout */
  ERR_PACKET_TIMEOUT = 1,
  /** ERR_EXEC_FAILURE - ERR_EXEC_FAILURE is the error code for tx execution failure */
  ERR_EXEC_FAILURE = 2,
  UNRECOGNIZED = -1,
}
export const ModuleErrorsAmino = ModuleErrors;
export function moduleErrorsFromJSON(object: any): ModuleErrors {
  switch (object) {
    case 0:
    case "ERR_UNKNOWN":
      return ModuleErrors.ERR_UNKNOWN;
    case 1:
    case "ERR_PACKET_TIMEOUT":
      return ModuleErrors.ERR_PACKET_TIMEOUT;
    case 2:
    case "ERR_EXEC_FAILURE":
      return ModuleErrors.ERR_EXEC_FAILURE;
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
    case ModuleErrors.ERR_PACKET_TIMEOUT:
      return "ERR_PACKET_TIMEOUT";
    case ModuleErrors.ERR_EXEC_FAILURE:
      return "ERR_EXEC_FAILURE";
    case ModuleErrors.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}