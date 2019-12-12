/* eslint-disable @typescript-eslint/camelcase */

import {
  createTestIntegrationData,
  IntegrationInstance,
} from "@jupiterone/jupiter-managed-integration-sdk";

import { Device } from "../crowdstrike/types";
import { createAccountEntity, createDeviceHostAgentEntity } from "./converters";

describe("createAccountEntity", () => {
  let instance: IntegrationInstance;

  beforeEach(() => {
    instance = createTestIntegrationData().instance;
  });

  test("properties transferred", () => {
    instance.id = "instance-123";
    instance.name = "My CrowdStrike";

    expect(createAccountEntity(instance)).toEqual({
      _class: ["Account"],
      _type: "crowdstrike_account",
      _scope: "crowdstrike_account",
      _key: "instance-123",
      _rawData: [],
      name: "My CrowdStrike",
      displayName: "My CrowdStrike",
    });
  });
});

describe("createDeviceHostAgentEntity", () => {
  test("properties transferred", () => {
    const source: Device = {
      device_id: "b7bbf18d26b344225072b1be2ae8b9e4",
      cid: "9e09b297082d49bb8209de043d880d14",
      agent_load_flags: "0",
      agent_local_time: "2016-03-25T12:14:01.127Z",
      agent_version: "0.0.0000.0",
      bios_manufacturer: "Crowdstrike",
      bios_version: "11.1.3 (32521)",
      build_number: "7601",
      config_id_base: "65994754",
      config_id_build: "0",
      config_id_platform: "3",
      external_ip: "54.183.25.1",
      mac_address: "08-00-27-51-56-d8",
      hostname: "Sample-Detect-2",
      first_seen: "2019-12-02T15:54:40Z",
      last_seen: "2019-12-02T15:54:40Z",
      local_ip: "15.2.0.10",
      major_version: "6",
      minor_version: "1",
      os_version: "Windows 7",
      platform_id: "0",
      platform_name: "Windows",
      policies: [
        {
          policy_type: "prevention",
          policy_id: "40bb0ba06b9f4a10a4330fccecc01f84",
          applied: false,
          settings_hash: "b030fc2e",
          assigned_date: "2019-12-02T15:57:02.852608239Z",
          applied_date: null,
          rule_groups: [],
        },
      ],
      device_policies: {
        prevention: {
          policy_type: "prevention",
          policy_id: "40bb0ba06b9f4a10a4330fccecc01f84",
          applied: false,
          settings_hash: "b030fc2e",
          assigned_date: "2019-12-02T15:57:02.852608239Z",
          applied_date: null,
          rule_groups: [],
        },
        sensor_update: {
          policy_type: "sensor-update",
          policy_id: "345eee272e244c4ca2554b0a701a0d95",
          applied: false,
          settings_hash: "65994753|3|2|automatic;0",
          assigned_date: "2019-12-02T15:57:02.852613977Z",
          applied_date: null,
          uninstall_protection: "DISABLED",
        },
        device_control: {
          policy_type: "device-control",
          policy_id: "a0a599ce2ef642afafe0d61aa1e27592",
          applied: false,
          assigned_date: "2019-12-02T15:57:02.852622432Z",
          applied_date: null,
        },
      },
      product_type: "1",
      product_type_desc: "Workstation",
      service_pack_major: "1",
      service_pack_minor: "0",
      pointer_size: "8",
      status: "normal",
      system_manufacturer: "CloudSim",
      system_product_name: "Crowdstrike",
      modified_timestamp: "2019-12-02T15:57:03Z",
      slow_changing_modified_timestamp: "2019-12-02T15:54:41Z",
      meta: {
        version: "4",
      },
    };

    expect(createDeviceHostAgentEntity(source)).toEqual({
      _class: ["HostAgent"],
      _type: "crowdstrike_sensor",
      _scope: "crowdstrike_sensor",
      _key: "b7bbf18d26b344225072b1be2ae8b9e4",
      _rawData: [{ name: "default", rawData: source }],
      name: "Sample-Detect-2",
      displayName: "Sample-Detect-2",
      status: "normal",
      function: ["anti-malware"],
    });
  });
});
