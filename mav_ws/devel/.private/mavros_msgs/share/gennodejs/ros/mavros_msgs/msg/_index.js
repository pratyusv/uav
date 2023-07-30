
"use strict";

let HilStateQuaternion = require('./HilStateQuaternion.js');
let DebugValue = require('./DebugValue.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let Altitude = require('./Altitude.js');
let ActuatorControl = require('./ActuatorControl.js');
let Vibration = require('./Vibration.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let VFR_HUD = require('./VFR_HUD.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let HilSensor = require('./HilSensor.js');
let HilGPS = require('./HilGPS.js');
let WaypointReached = require('./WaypointReached.js');
let BatteryStatus = require('./BatteryStatus.js');
let ExtendedState = require('./ExtendedState.js');
let ParamValue = require('./ParamValue.js');
let HilControls = require('./HilControls.js');
let Waypoint = require('./Waypoint.js');
let RCOut = require('./RCOut.js');
let Trajectory = require('./Trajectory.js');
let PositionTarget = require('./PositionTarget.js');
let StatusText = require('./StatusText.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let ManualControl = require('./ManualControl.js');
let FileEntry = require('./FileEntry.js');
let RCIn = require('./RCIn.js');
let CommandCode = require('./CommandCode.js');
let WaypointList = require('./WaypointList.js');
let RadioStatus = require('./RadioStatus.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let LogData = require('./LogData.js');
let LogEntry = require('./LogEntry.js');
let HomePosition = require('./HomePosition.js');
let Thrust = require('./Thrust.js');
let RTCM = require('./RTCM.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let Mavlink = require('./Mavlink.js');
let State = require('./State.js');

module.exports = {
  HilStateQuaternion: HilStateQuaternion,
  DebugValue: DebugValue,
  OpticalFlowRad: OpticalFlowRad,
  Altitude: Altitude,
  ActuatorControl: ActuatorControl,
  Vibration: Vibration,
  OverrideRCIn: OverrideRCIn,
  VFR_HUD: VFR_HUD,
  AttitudeTarget: AttitudeTarget,
  GlobalPositionTarget: GlobalPositionTarget,
  HilSensor: HilSensor,
  HilGPS: HilGPS,
  WaypointReached: WaypointReached,
  BatteryStatus: BatteryStatus,
  ExtendedState: ExtendedState,
  ParamValue: ParamValue,
  HilControls: HilControls,
  Waypoint: Waypoint,
  RCOut: RCOut,
  Trajectory: Trajectory,
  PositionTarget: PositionTarget,
  StatusText: StatusText,
  CamIMUStamp: CamIMUStamp,
  ManualControl: ManualControl,
  FileEntry: FileEntry,
  RCIn: RCIn,
  CommandCode: CommandCode,
  WaypointList: WaypointList,
  RadioStatus: RadioStatus,
  ADSBVehicle: ADSBVehicle,
  HilActuatorControls: HilActuatorControls,
  LogData: LogData,
  LogEntry: LogEntry,
  HomePosition: HomePosition,
  Thrust: Thrust,
  RTCM: RTCM,
  TimesyncStatus: TimesyncStatus,
  Mavlink: Mavlink,
  State: State,
};
