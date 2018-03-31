export const groups = {
  "data": [{
    "id": "custom.50_users_test",
    "type": "groups/custom",
    "attributes": {
      "name": "50_users_test",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "SF Office",
      "query": "user_id:(115306 OR 115307 OR 113999 OR 114031 OR 113903 OR 112920 OR 92860 OR 85373 OR 173160 OR 57834 OR 396357 OR 55411 OR 55110 OR 38048 OR 340257 OR 249433 OR 184873 OR 31461 OR 74673 OR 75759 OR 114912 OR 88915 OR 189785 OR 373224 OR 72466 OR 114105 OR 154585 OR 303573 OR 328743 OR 244234 OR 246316 OR 37878 OR 519531 OR 28332 OR 50329 OR 109214 OR 114383 OR 116217 OR 126971 OR 114925 OR 89785 OR 92310 OR 217688 OR 84943 OR 117115 OR 117803 OR 115862 OR 87465 OR 184719 OR 16275 OR 92920 OR 178439 OR 110430 OR 172818 OR 135882 OR 62289 OR 172832 OR 286674 OR 530248 OR 284232 OR 276469 OR 473268 OR 336370 OR 178955 OR 169500)",
      "tags": [],
      "total-users": 53,
      "order": []
    }
  }, {
    "id": "custom.aaron_s_test_channel",
    "type": "groups/custom",
    "attributes": {
      "name": "aaron_s_test_channel",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Aaron's Test Channel",
      "query": "channels.name:\"Aaron's Test Channel\" OR status:registered OR group:all_sales_team AND *",
      "tags": ["channels"],
      "total-users": 29,
      "order": []
    }
  }, {
    "id": "custom.ab_drug_corporation_news",
    "type": "groups/custom",
    "attributes": {
      "name": "ab_drug_corporation_news",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "AB Drug Corporation News",
      "query": "channels.name:\"AB Drug Corporation News\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.ab_enterprise_news",
    "type": "groups/custom",
    "attributes": {
      "name": "ab_enterprise_news",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "AB Enterprise News",
      "query": "channels.name:\"AB Enterprise News\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.ab_social",
    "type": "groups/custom",
    "attributes": {
      "name": "ab_social",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "AB Social",
      "query": "channels.name:\"AB Social\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.active_contact_by_push",
    "type": "groups/custom",
    "attributes": {
      "name": "active_contact_by_push",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Active contact by push",
      "query": "status:registered AND reachable_by_push_notification:true AND last_active:last_30_days",
      "tags": [],
      "total-users": 107,
      "order": []
    }
  }, {
    "id": "custom.active_urgent_contact_by_email",
    "type": "groups/custom",
    "attributes": {
      "name": "active_urgent_contact_by_email",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Active Urgent contact by email",
      "query": "status:registered AND last_active:last_30_days AND reachable_by_push_notification:false AND verified_email:true",
      "tags": [],
      "total-users": 18,
      "order": []
    }
  }, {
    "id": "custom.alabama",
    "type": "groups/custom",
    "attributes": {
      "name": "alabama",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Alabama",
      "query": "usage_location:Alabama AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.alaska",
    "type": "groups/custom",
    "attributes": {
      "name": "alaska",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Alaska",
      "query": "usage_location:Alaska AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.all_sales_team",
    "type": "groups/custom",
    "attributes": {
      "name": "all_sales_team",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "All Sales Team",
      "query": "user_id:(168738 OR 230711 OR 324539 OR 272684 OR 394948 OR 263691 OR 347834 OR 340832 OR 172566 OR 230039 OR 38109 OR 236203 OR 210643 OR 269868 OR 244297 OR 37832 OR 36971 OR 241769 OR 231652 OR 38108 OR 244234 OR 123693 OR 262721 OR 205773 OR 156677 OR 156678 OR 72466 OR 233713 OR 38032)",
      "tags": [],
      "total-users": 29,
      "order": []
    }
  }, {
    "id": "custom.all_users_except_superadmins",
    "type": "groups/custom",
    "attributes": {
      "name": "all_users_except_superadmins",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "All Users (except SuperAdmins)",
      "query": "role:member OR role:administrator OR role:analyst OR role:publisher OR role:program_admin OR role:brand_admin",
      "tags": [],
      "total-users": 649,
      "order": []
    }
  }, {
    "id": "custom.alpes_maritimes",
    "type": "groups/custom",
    "attributes": {
      "name": "alpes_maritimes",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Alpes-Maritimes",
      "query": "usage_location:\"Alpes-Maritimes\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.ambassador_info_shell",
    "type": "groups/custom",
    "attributes": {
      "name": "ambassador_info_shell",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Ambassador Info (Shell)",
      "query": "channels.name:\"Ambassador Info (Shell)\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.android",
    "type": "groups/custom",
    "attributes": {
      "name": "android",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Android",
      "query": "custom.front_end_application:Android AND status:registered",
      "tags": [],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.antioquia",
    "type": "groups/custom",
    "attributes": {
      "name": "antioquia",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Antioquia",
      "query": "usage_location:Antioquia AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.arizona",
    "type": "groups/custom",
    "attributes": {
      "name": "arizona",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Arizona",
      "query": "usage_location:Arizona AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.arkansas",
    "type": "groups/custom",
    "attributes": {
      "name": "arkansas",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Arkansas",
      "query": "usage_location:Arkansas AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.arm",
    "type": "groups/custom",
    "attributes": {
      "name": "arm",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "ARM",
      "query": "user_id:(347834)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.ascoli_piceno",
    "type": "groups/custom",
    "attributes": {
      "name": "ascoli_piceno",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Ascoli Piceno",
      "query": "usage_location:\"Ascoli Piceno\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.baja_california_sur",
    "type": "groups/custom",
    "attributes": {
      "name": "baja_california_sur",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Baja California Sur",
      "query": "usage_location:\"Baja California Sur\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.bam_management",
    "type": "groups/custom",
    "attributes": {
      "name": "bam_management",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "BAM-Management",
      "query": "user_id:(642504 OR 272684 OR 533433 OR 453947 OR 40647 OR 172566 OR 38032 OR 296412 OR 131121)",
      "tags": [],
      "total-users": 9,
      "order": []
    }
  }, {
    "id": "custom.bam_sales_team",
    "type": "groups/custom",
    "attributes": {
      "name": "bam_sales_team",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "BAM-Sales Team",
      "query": "user_id:(502436 OR 400071 OR 72466 OR 38108 OR 38109 OR 272684 OR 662410 OR 205773 OR 36971 OR 156677 OR 645419 OR 600100 OR 236203 OR 37832 OR 684777 OR 262721 OR 480448 OR 38032 OR 435716 OR 563712)",
      "tags": [],
      "total-users": 20,
      "order": []
    }
  }, {
    "id": "custom.bam_sdr",
    "type": "groups/custom",
    "attributes": {
      "name": "bam_sdr",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "BAM SDR",
      "query": "user_id:(645253 OR 645250 OR 703993 OR 233713 OR 392881 OR 394948 OR 480448 OR 530248 OR 600172 OR 645246 OR 645252 OR 654540)",
      "tags": [],
      "total-users": 12,
      "order": []
    }
  }, {
    "id": "custom.bangkok",
    "type": "groups/custom",
    "attributes": {
      "name": "bangkok",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Bangkok",
      "query": "usage_location:Bangkok AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.barcelona",
    "type": "groups/custom",
    "attributes": {
      "name": "barcelona",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Barcelona",
      "query": "usage_location:Barcelona AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.beta",
    "type": "groups/custom",
    "attributes": {
      "name": "beta",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Beta",
      "query": "channels.name:Beta AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.bobby_140530",
    "type": "groups/custom",
    "attributes": {
      "name": "bobby_140530",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "bobby",
      "query": "user_id:(38108)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.bobby_140531",
    "type": "groups/custom",
    "attributes": {
      "name": "bobby_140531",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "bobby",
      "query": "user_id:(38108)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.bobby_isaacson",
    "type": "groups/custom",
    "attributes": {
      "name": "bobby_isaacson",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Bobby Isaacson",
      "query": "user_id:(38108)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.bogota_d_c",
    "type": "groups/custom",
    "attributes": {
      "name": "bogota_d_c",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Bogota D.C.",
      "query": "usage_location:\"Bogota D.C.\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.brandon_nicole",
    "type": "groups/custom",
    "attributes": {
      "name": "brandon_nicole",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Brandon \u0026 Nicole",
      "query": "user_id:(38109 OR 208991 OR 38032)",
      "tags": [],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "custom.brandon_personal_group",
    "type": "groups/custom",
    "attributes": {
      "name": "brandon_personal_group",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Brandon Personal Group",
      "query": "user_id:(38109)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.brandon_s_personal_channel",
    "type": "groups/custom",
    "attributes": {
      "name": "brandon_s_personal_channel",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Brandon's Personal Channel",
      "query": "channels.name:\"Brandon's Personal Channel\" AND status:registered",
      "tags": ["channels"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.brandon_test_channel",
    "type": "groups/custom",
    "attributes": {
      "name": "brandon_test_channel",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Brandon Test Channel",
      "query": "channels.name:\"Brandon Test Channel\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.brandon_test_group",
    "type": "groups/custom",
    "attributes": {
      "name": "brandon_test_group",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Brandon Test Group",
      "query": "user_id:(38109)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.brandon_test_group_2",
    "type": "groups/custom",
    "attributes": {
      "name": "brandon_test_group_2",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Brandon Test Group 2",
      "query": "user_id:(38109)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.british_columbia",
    "type": "groups/custom",
    "attributes": {
      "name": "british_columbia",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "British Columbia",
      "query": "usage_location:\"British Columbia\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.california_199933",
    "type": "groups/custom",
    "attributes": {
      "name": "california_199933",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "California",
      "query": "usage_location:California AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 63,
      "order": []
    }
  }, {
    "id": "custom.california_89566",
    "type": "groups/custom",
    "attributes": {
      "name": "california_89566",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "California",
      "query": "",
      "tags": ["location", "engagement"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.camden",
    "type": "groups/custom",
    "attributes": {
      "name": "camden",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Camden",
      "query": "usage_location:Camden AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.campania",
    "type": "groups/custom",
    "attributes": {
      "name": "campania",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Campania",
      "query": "usage_location:Campania AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.catalonia",
    "type": "groups/custom",
    "attributes": {
      "name": "catalonia",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Catalonia",
      "query": "usage_location:Catalonia AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.cayo_district",
    "type": "groups/custom",
    "attributes": {
      "name": "cayo_district",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Cayo District",
      "query": "usage_location:\"Cayo District\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.central_singapore_community_development_council",
    "type": "groups/custom",
    "attributes": {
      "name": "central_singapore_community_development_council",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Central Singapore Community Development Council",
      "query": "usage_location:\"Central Singapore Community Development Council\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.chandigarh",
    "type": "groups/custom",
    "attributes": {
      "name": "chandigarh",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Chandigarh",
      "query": "usage_location:Chandigarh AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.changwat_krabi",
    "type": "groups/custom",
    "attributes": {
      "name": "changwat_krabi",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Changwat Krabi",
      "query": "usage_location:\"Changwat Krabi\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.changwat_surat_thani",
    "type": "groups/custom",
    "attributes": {
      "name": "changwat_surat_thani",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Changwat Surat Thani",
      "query": "usage_location:\"Changwat Surat Thani\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.cherkas_ka_oblast_",
    "type": "groups/custom",
    "attributes": {
      "name": "cherkas_ka_oblast_",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Cherkas'ka Oblast'",
      "query": "usage_location:\"Cherkas'ka Oblast'\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.chiapas",
    "type": "groups/custom",
    "attributes": {
      "name": "chiapas",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Chiapas",
      "query": "usage_location:Chiapas AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.city_of_westminster",
    "type": "groups/custom",
    "attributes": {
      "name": "city_of_westminster",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "City of Westminster",
      "query": "usage_location:\"City of Westminster\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.colleen_sords",
    "type": "groups/custom",
    "attributes": {
      "name": "colleen_sords",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Colleen Sords",
      "query": "user_id:(392881)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.colorado",
    "type": "groups/custom",
    "attributes": {
      "name": "colorado",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Colorado",
      "query": "usage_location:Colorado AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 5,
      "order": []
    }
  }, {
    "id": "custom.connecticut",
    "type": "groups/custom",
    "attributes": {
      "name": "connecticut",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Connecticut",
      "query": "usage_location:Connecticut AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.crawford_demo",
    "type": "groups/custom",
    "attributes": {
      "name": "crawford_demo",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Crawford-demo",
      "query": "user_id:(533433 OR 296412 OR 502580)",
      "tags": [],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "custom.css",
    "type": "groups/custom",
    "attributes": {
      "name": "css",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "CS\u0026S",
      "query": "user_id:(587388 OR 396357 OR 37836 OR 486060 OR 533433 OR 448526 OR 397178 OR 399166 OR 600240 OR 502580 OR 366608 OR 510381 OR 296412)",
      "tags": [],
      "total-users": 13,
      "order": []
    }
  }, {
    "id": "custom.custom_fly_2806",
    "type": "groups/custom",
    "attributes": {
      "name": "custom_fly_2806",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Custom_FLY-2806",
      "query": "user_id:(336370 OR 276469 OR 303573 OR 286674)",
      "tags": [],
      "total-users": 4,
      "order": []
    }
  }, {
    "id": "custom.davelutzgroup",
    "type": "groups/custom",
    "attributes": {
      "name": "davelutzgroup",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "DaveLutzGroup",
      "query": "status:registered AND email:\"dave.lutz@socialchorus.com\"",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.delaware",
    "type": "groups/custom",
    "attributes": {
      "name": "delaware",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Delaware",
      "query": "usage_location:Delaware AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.departamento_de_guatemala",
    "type": "groups/custom",
    "attributes": {
      "name": "departamento_de_guatemala",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Departamento de Guatemala",
      "query": "usage_location:\"Departamento de Guatemala\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.district_of_columbia",
    "type": "groups/custom",
    "attributes": {
      "name": "district_of_columbia",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "District of Columbia",
      "query": "usage_location:\"District of Columbia\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.dominick_d",
    "type": "groups/custom",
    "attributes": {
      "name": "dominick_d",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Dominick D.",
      "query": "user_id:(502436)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.edelman",
    "type": "groups/custom",
    "attributes": {
      "name": "edelman",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Edelman",
      "query": "channels.name:Edelman AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.empty_feed",
    "type": "groups/custom",
    "attributes": {
      "name": "empty_feed",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Empty feed",
      "query": "channels.name:\"Empty feed\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.engagement_managers_and_strategic_advisory",
    "type": "groups/custom",
    "attributes": {
      "name": "engagement_managers_and_strategic_advisory",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Engagement Managers and Strategic Advisory",
      "query": "user_id:(486060 OR 366608 OR 399166 OR 296412 OR 448526 OR 397178 OR 396357 OR 37836)",
      "tags": [],
      "total-users": 8,
      "order": []
    }
  }, {
    "id": "custom.engineering_offsite_2017",
    "type": "groups/custom",
    "attributes": {
      "name": "engineering_offsite_2017",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Engineering Offsite 2017",
      "query": "user_id:(25160 OR 37796 OR 40647 OR 62031 OR 67903 OR 75473 OR 79467 OR 115701 OR 118834 OR 131121 OR 167230 OR 181076 OR 205426 OR 219304 OR 230039 OR 239142 OR 252874 OR 276469 OR 282979 OR 336370 OR 337767 OR 340257 OR 405469 OR 412128 OR 453947 OR 467584 OR 474830 OR 491294 OR 497314 OR 510748)",
      "tags": [],
      "total-users": 30,
      "order": []
    }
  }, {
    "id": "custom.engineering_offsite_2017_2",
    "type": "groups/custom",
    "attributes": {
      "name": "engineering_offsite_2017_2",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Engineering Offsite 2017 2",
      "query": "group:engineering_offsite_2017",
      "tags": [],
      "total-users": 30,
      "order": []
    }
  }, {
    "id": "custom.england",
    "type": "groups/custom",
    "attributes": {
      "name": "england",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "England",
      "query": "usage_location:England AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "custom.english_language",
    "type": "groups/custom",
    "attributes": {
      "name": "english_language",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "English Language",
      "query": "",
      "tags": [],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.eng_offsite_subset",
    "type": "groups/custom",
    "attributes": {
      "name": "eng_offsite_subset",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Eng-Offsite-Subset",
      "query": "user_id:(412128 OR 405469 OR 252874 OR 115701 OR 181076 OR 340257 OR 239142 OR 75473 OR 76916 OR 276469 OR 336370)",
      "tags": [],
      "total-users": 11,
      "order": []
    }
  }, {
    "id": "custom.eric_liu",
    "type": "groups/custom",
    "attributes": {
      "name": "eric_liu",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Eric Liu",
      "query": "user_id:(156677)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.field_kick_off_2018",
    "type": "groups/custom",
    "attributes": {
      "name": "field_kick_off_2018",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Field Kick Off 2018",
      "query": "user_id:(654540 OR 36971 OR 37832 OR 38032 OR 38108 OR 38109 OR 40647 OR 53366 OR 72466 OR 156677 OR 163672 OR 205773 OR 233713 OR 236203 OR 262721 OR 272684 OR 282979 OR 296412 OR 319839 OR 340832 OR 354359 OR 366608 OR 392881 OR 394652 OR 394948 OR 396357 OR 397178 OR 399166 OR 400071 OR 435716 OR 448526 OR 453947 OR 480448 OR 486060 OR 497314 OR 502436 OR 502580 OR 510381 OR 530248 OR 533433 OR 563712 OR 600100 OR 600172 OR 600240 OR 642504 OR 645246 OR 645252 OR 645419 OR 660964 OR 661044 OR 662410 OR 662711)",
      "tags": [],
      "total-users": 52,
      "order": []
    }
  }, {
    "id": "custom.florida",
    "type": "groups/custom",
    "attributes": {
      "name": "florida",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Florida",
      "query": "usage_location:Florida AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "custom.futurecomms_spiff_winner",
    "type": "groups/custom",
    "attributes": {
      "name": "futurecomms_spiff_winner",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "FutureComms Spiff Winner",
      "query": "user_id:(397178 OR 37836)",
      "tags": [],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "custom.georgia",
    "type": "groups/custom",
    "attributes": {
      "name": "georgia",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Georgia",
      "query": "usage_location:Georgia AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.gillians",
    "type": "groups/custom",
    "attributes": {
      "name": "gillians",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Gillians",
      "query": "user_id:(272466)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.gregs_fans",
    "type": "groups/custom",
    "attributes": {
      "name": "gregs_fans",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Gregs' Fans",
      "query": "",
      "tags": [],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.guanajuato",
    "type": "groups/custom",
    "attributes": {
      "name": "guanajuato",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Guanajuato",
      "query": "usage_location:Guanajuato AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.guests_all",
    "type": "groups/custom",
    "attributes": {
      "name": "guests_all",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Guests (All)",
      "query": "status:guest",
      "tags": [],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.gujarat",
    "type": "groups/custom",
    "attributes": {
      "name": "gujarat",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Gujarat",
      "query": "usage_location:Gujarat AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.hackney",
    "type": "groups/custom",
    "attributes": {
      "name": "hackney",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Hackney",
      "query": "usage_location:Hackney AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.hammersmith_and_fulham",
    "type": "groups/custom",
    "attributes": {
      "name": "hammersmith_and_fulham",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Hammersmith and Fulham",
      "query": "usage_location:\"Hammersmith and Fulham\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.harassment_training_attendees",
    "type": "groups/custom",
    "attributes": {
      "name": "harassment_training_attendees",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Harassment Training Attendees",
      "query": "user_id:(262721 OR 67903 OR 156677 OR 205773 OR 244234 OR 249433 OR 163672 OR 36971 OR 252874 OR 236203 OR 210643 OR 241769 OR 116535 OR 243703 OR 231652 OR 276469 OR 230711 OR 205426 OR 244297 OR 25160 OR 115701 OR 282979 OR 37832 OR 269868 OR 215669 OR 110838 OR 172566 OR 230039 OR 28357 OR 181076 OR 37836 OR 241798 OR 76916 OR 118834 OR 245568 OR 182203 OR 72466 OR 233713 OR 156678 OR 62031 OR 38032 OR 219304 OR 239142 OR 296412)",
      "tags": [],
      "total-users": 44,
      "order": []
    }
  }, {
    "id": "custom.hawaii",
    "type": "groups/custom",
    "attributes": {
      "name": "hawaii",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Hawaii",
      "query": "usage_location:Hawaii AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.hidalgo",
    "type": "groups/custom",
    "attributes": {
      "name": "hidalgo",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Hidalgo",
      "query": "usage_location:Hidalgo AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.idaho",
    "type": "groups/custom",
    "attributes": {
      "name": "idaho",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Idaho",
      "query": "usage_location:Idaho AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.illinois",
    "type": "groups/custom",
    "attributes": {
      "name": "illinois",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Illinois",
      "query": "usage_location:Illinois AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 7,
      "order": []
    }
  }, {
    "id": "custom.inactive_contact_by_email",
    "type": "groups/custom",
    "attributes": {
      "name": "inactive_contact_by_email",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Inactive contact by email",
      "query": "verified_email:true AND NOT status:blocked AND NOT last_active:last_30_days AND reachable_by_push_notification:false",
      "tags": [],
      "total-users": 88,
      "order": []
    }
  }, {
    "id": "custom.inactive_contact_by_push",
    "type": "groups/custom",
    "attributes": {
      "name": "inactive_contact_by_push",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Inactive contact by push",
      "query": "NOT status:blocked AND reachable_by_push_notification:true AND NOT last_active:last_30_days",
      "tags": [],
      "total-users": 27,
      "order": []
    }
  }, {
    "id": "custom.indiana",
    "type": "groups/custom",
    "attributes": {
      "name": "indiana",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Indiana",
      "query": "usage_location:Indiana AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.international_safety_updates",
    "type": "groups/custom",
    "attributes": {
      "name": "international_safety_updates",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "International Safety Updates",
      "query": "channels.name:\"International Safety Updates\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.ios",
    "type": "groups/custom",
    "attributes": {
      "name": "ios",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "iOS",
      "query": "custom.front_end_application:iOS AND status:registered",
      "tags": [],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.jennifer_test",
    "type": "groups/custom",
    "attributes": {
      "name": "jennifer_test",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Jennifer Test",
      "query": "user_id:(397178)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.jim_foster",
    "type": "groups/custom",
    "attributes": {
      "name": "jim_foster",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Jim Foster",
      "query": "user_id:(600100)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.june_sales_leadership_event",
    "type": "groups/custom",
    "attributes": {
      "name": "june_sales_leadership_event",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "June Sales Leadership Event",
      "query": "channels.name:\"June Sales Leadership Event\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.just_dan",
    "type": "groups/custom",
    "attributes": {
      "name": "just_dan",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Just Dan",
      "query": "user_id:(205773)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.kanagawa",
    "type": "groups/custom",
    "attributes": {
      "name": "kanagawa",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Kanagawa",
      "query": "usage_location:Kanagawa AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.kansas",
    "type": "groups/custom",
    "attributes": {
      "name": "kansas",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Kansas",
      "query": "usage_location:Kansas AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.karnataka",
    "type": "groups/custom",
    "attributes": {
      "name": "karnataka",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Karnataka",
      "query": "usage_location:Karnataka AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.katelyn_demo",
    "type": "groups/custom",
    "attributes": {
      "name": "katelyn_demo",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Katelyn Demo",
      "query": "user_id:(563712 OR 236203)",
      "tags": [],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "custom.katelyn_test_138299",
    "type": "groups/custom",
    "attributes": {
      "name": "katelyn_test_138299",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Katelyn Test",
      "query": "user_id:(236203)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.katelyn_test_183011",
    "type": "groups/custom",
    "attributes": {
      "name": "katelyn_test_183011",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Katelyn Test",
      "query": "user_id:(236203 OR 38108)",
      "tags": [],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "custom.katelyn_test_183070",
    "type": "groups/custom",
    "attributes": {
      "name": "katelyn_test_183070",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Katelyn Test",
      "query": "channels.name:\"Katelyn Test\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.katie_test_138574",
    "type": "groups/custom",
    "attributes": {
      "name": "katie_test_138574",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Katie Test",
      "query": "user_id:(231652)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.katie_test_138575",
    "type": "groups/custom",
    "attributes": {
      "name": "katie_test_138575",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Katie Test",
      "query": "user_id:(231652)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.ken",
    "type": "groups/custom",
    "attributes": {
      "name": "ken",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Ken",
      "query": "user_id:(172566)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.kenny",
    "type": "groups/custom",
    "attributes": {
      "name": "kenny",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Kenny",
      "query": "user_id:(620722)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.kentucky",
    "type": "groups/custom",
    "attributes": {
      "name": "kentucky",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Kentucky",
      "query": "usage_location:Kentucky AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.kyoto",
    "type": "groups/custom",
    "attributes": {
      "name": "kyoto",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Kyoto",
      "query": "usage_location:Kyoto AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.last_active_today",
    "type": "groups/custom",
    "attributes": {
      "name": "last_active_today",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Last active today",
      "query": "status:registered AND last_active:now-90d",
      "tags": [],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.latium",
    "type": "groups/custom",
    "attributes": {
      "name": "latium",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Latium",
      "query": "usage_location:Latium AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.lauren_solomon",
    "type": "groups/custom",
    "attributes": {
      "name": "lauren_solomon",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Lauren Solomon",
      "query": "user_id:(62031)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.leiria",
    "type": "groups/custom",
    "attributes": {
      "name": "leiria",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Leiria",
      "query": "usage_location:Leiria AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.lisbon",
    "type": "groups/custom",
    "attributes": {
      "name": "lisbon",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Lisbon",
      "query": "usage_location:Lisbon AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.lombardy",
    "type": "groups/custom",
    "attributes": {
      "name": "lombardy",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Lombardy",
      "query": "usage_location:Lombardy AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.london_summit",
    "type": "groups/custom",
    "attributes": {
      "name": "london_summit",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "London-Summit",
      "query": "user_id:(40647 OR 72466 OR 205773)",
      "tags": [],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "custom.lost_users_in_2017",
    "type": "groups/custom",
    "attributes": {
      "name": "lost_users_in_2017",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Lost Users in 2017",
      "query": "status:registered AND joined:last_year AND last_active:last_quarter",
      "tags": [],
      "total-users": 20,
      "order": []
    }
  }, {
    "id": "custom.louise_miller",
    "type": "groups/custom",
    "attributes": {
      "name": "louise_miller",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Louise Miller",
      "query": "user_id:(37832)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.louise_s_test_group",
    "type": "groups/custom",
    "attributes": {
      "name": "louise_s_test_group",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Louise's Test Group",
      "query": "user_id:(37832)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.louisiana",
    "type": "groups/custom",
    "attributes": {
      "name": "louisiana",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Louisiana",
      "query": "usage_location:Louisiana AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.love_s_travel_stops",
    "type": "groups/custom",
    "attributes": {
      "name": "love_s_travel_stops",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Love's Travel Stops",
      "query": "channels.name:\"Love's Travel Stops\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.l_vivs_ka_oblast_",
    "type": "groups/custom",
    "attributes": {
      "name": "l_vivs_ka_oblast_",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "L'vivs'ka Oblast'",
      "query": "usage_location:\"L'vivs'ka Oblast'\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.madhya_pradesh",
    "type": "groups/custom",
    "attributes": {
      "name": "madhya_pradesh",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Madhya Pradesh",
      "query": "usage_location:\"Madhya Pradesh\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.maharashtra",
    "type": "groups/custom",
    "attributes": {
      "name": "maharashtra",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Maharashtra",
      "query": "usage_location:Maharashtra AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.maine",
    "type": "groups/custom",
    "attributes": {
      "name": "maine",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Maine",
      "query": "usage_location:Maine AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "custom.management",
    "type": "groups/custom",
    "attributes": {
      "name": "management",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Management",
      "query": "channels.name:Management AND status:registered",
      "tags": ["channels"],
      "total-users": 9,
      "order": []
    }
  }, {
    "id": "custom.management_team",
    "type": "groups/custom",
    "attributes": {
      "name": "management_team",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Management Team",
      "query": "user_id:(642504 OR 533433 OR 662711 OR 272684 OR 453947 OR 40647 OR 172566 OR 38032 OR 296412 OR 131121)",
      "tags": [],
      "total-users": 10,
      "order": []
    }
  }, {
    "id": "custom.manish_test_group",
    "type": "groups/custom",
    "attributes": {
      "name": "manish_test_group",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Manish Test Group",
      "query": "user_id:(62031 OR 399166)",
      "tags": [],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "custom.marias",
    "type": "groups/custom",
    "attributes": {
      "name": "marias",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Marias",
      "query": "status:registered AND (email:\"maria.diaz+support@socialchorus.com\" OR email:\"maria.diaz+5@socialchorus.com\")",
      "tags": [],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "custom.marketing",
    "type": "groups/custom",
    "attributes": {
      "name": "marketing",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Marketing",
      "query": "user_id:(282979 OR 230039 OR 319839)",
      "tags": [],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "custom.maryland",
    "type": "groups/custom",
    "attributes": {
      "name": "maryland",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Maryland",
      "query": "usage_location:Maryland AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.massachusetts",
    "type": "groups/custom",
    "attributes": {
      "name": "massachusetts",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Massachusetts",
      "query": "usage_location:Massachusetts AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "custom.max_test",
    "type": "groups/custom",
    "attributes": {
      "name": "max_test",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Max Test",
      "query": "user_id:(685057 OR 678167 OR 502580)",
      "tags": [],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "custom.mdemea",
    "type": "groups/custom",
    "attributes": {
      "name": "mdemea",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "MDEMEA",
      "query": "status:registered AND name:\"cyrus gilbert-rolfe\"",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.melissa_test_group",
    "type": "groups/custom",
    "attributes": {
      "name": "melissa_test_group",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Melissa Test Group",
      "query": "user_id:(684777)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.melissa_testing1",
    "type": "groups/custom",
    "attributes": {
      "name": "melissa_testing1",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Melissa Testing1",
      "query": "user_id:(684777)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.merina_bigley",
    "type": "groups/custom",
    "attributes": {
      "name": "merina_bigley",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Merina Bigley",
      "query": "user_id:(262721)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.mexico_city",
    "type": "groups/custom",
    "attributes": {
      "name": "mexico_city",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Mexico City",
      "query": "usage_location:\"Mexico City\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.mgt",
    "type": "groups/custom",
    "attributes": {
      "name": "mgt",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Mgt",
      "query": "channels.name:Mgt AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.michael_a_group_of_michaels",
    "type": "groups/custom",
    "attributes": {
      "name": "michael_a_group_of_michaels",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Michael; a group of Michaels",
      "query": "user_id:(375278 OR 337767 OR 362493)",
      "tags": [],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "custom.michigan",
    "type": "groups/custom",
    "attributes": {
      "name": "michigan",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Michigan",
      "query": "usage_location:Michigan AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.minnesota",
    "type": "groups/custom",
    "attributes": {
      "name": "minnesota",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Minnesota",
      "query": "usage_location:Minnesota AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.mississippi",
    "type": "groups/custom",
    "attributes": {
      "name": "mississippi",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Mississippi",
      "query": "usage_location:Mississippi AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.missouri",
    "type": "groups/custom",
    "attributes": {
      "name": "missouri",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Missouri",
      "query": "usage_location:Missouri AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.montana",
    "type": "groups/custom",
    "attributes": {
      "name": "montana",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Montana",
      "query": "usage_location:Montana AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.myles_tanous",
    "type": "groups/custom",
    "attributes": {
      "name": "myles_tanous",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Myles Tanous",
      "query": "user_id:(354359)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.my_main_event",
    "type": "groups/custom",
    "attributes": {
      "name": "my_main_event",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "My Main Event",
      "query": "channels.name:\"My Main Event\" AND status:registered",
      "tags": ["channels"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "custom.nacional",
    "type": "groups/custom",
    "attributes": {
      "name": "nacional",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Nacional",
      "query": "usage_location:Nacional AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.nara",
    "type": "groups/custom",
    "attributes": {
      "name": "nara",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Nara",
      "query": "usage_location:Nara AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.nate",
    "type": "groups/custom",
    "attributes": {
      "name": "nate",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "nate",
      "query": "user_id:(497314)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.nate_test",
    "type": "groups/custom",
    "attributes": {
      "name": "nate_test",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Nate Test",
      "query": "user_id:(400071)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.nebraska",
    "type": "groups/custom",
    "attributes": {
      "name": "nebraska",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Nebraska",
      "query": "usage_location:Nebraska AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.nevada",
    "type": "groups/custom",
    "attributes": {
      "name": "nevada",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Nevada",
      "query": "usage_location:Nevada AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 6,
      "order": []
    }
  }, {
    "id": "custom.new_hampshire",
    "type": "groups/custom",
    "attributes": {
      "name": "new_hampshire",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "New Hampshire",
      "query": "usage_location:\"New Hampshire\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.new_jersey",
    "type": "groups/custom",
    "attributes": {
      "name": "new_jersey",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "New Jersey",
      "query": "usage_location:\"New Jersey\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.new_mexico",
    "type": "groups/custom",
    "attributes": {
      "name": "new_mexico",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "New Mexico",
      "query": "usage_location:\"New Mexico\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "custom.new_south_wales",
    "type": "groups/custom",
    "attributes": {
      "name": "new_south_wales",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "New South Wales",
      "query": "usage_location:\"New South Wales\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.new_york",
    "type": "groups/custom",
    "attributes": {
      "name": "new_york",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "New York",
      "query": "usage_location:\"New York\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 7,
      "order": []
    }
  }, {
    "id": "custom.no_push_this_year",
    "type": "groups/custom",
    "attributes": {
      "name": "no_push_this_year",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "No push, this year",
      "query": "status:registered OR joined:this_year AND reachable_by_push_notification:false",
      "tags": [],
      "total-users": 71,
      "order": []
    }
  }, {
    "id": "custom.north_carolina",
    "type": "groups/custom",
    "attributes": {
      "name": "north_carolina",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "North Carolina",
      "query": "usage_location:\"North Carolina\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.north_holland",
    "type": "groups/custom",
    "attributes": {
      "name": "north_holland",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "North Holland",
      "query": "usage_location:\"North Holland\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.not_signed_out",
    "type": "groups/custom",
    "attributes": {
      "name": "not_signed_out",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Not Signed-Out",
      "query": "custom.front_end_application:\"Not Signed-Out\" AND status:registered",
      "tags": [],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.nuevo_leon",
    "type": "groups/custom",
    "attributes": {
      "name": "nuevo_leon",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Nuevo León",
      "query": "usage_location:\"Nuevo León\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.o4o_bootcamp",
    "type": "groups/custom",
    "attributes": {
      "name": "o4o_bootcamp",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "O4O Bootcamp",
      "query": "user_id:(396357 OR 399166 OR 453947 OR 486060 OR 397178 OR 502580 OR 37836 OR 366608 OR 510381 OR 480448)",
      "tags": [],
      "total-users": 10,
      "order": []
    }
  }, {
    "id": "custom.ohio",
    "type": "groups/custom",
    "attributes": {
      "name": "ohio",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Ohio",
      "query": "usage_location:Ohio AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.okinawa",
    "type": "groups/custom",
    "attributes": {
      "name": "okinawa",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Okinawa",
      "query": "usage_location:Okinawa AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.oklahoma",
    "type": "groups/custom",
    "attributes": {
      "name": "oklahoma",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Oklahoma",
      "query": "usage_location:Oklahoma AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.ontario",
    "type": "groups/custom",
    "attributes": {
      "name": "ontario",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Ontario",
      "query": "usage_location:Ontario AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.oregon",
    "type": "groups/custom",
    "attributes": {
      "name": "oregon",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Oregon",
      "query": "usage_location:Oregon AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 8,
      "order": []
    }
  }, {
    "id": "custom.padua",
    "type": "groups/custom",
    "attributes": {
      "name": "padua",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Padua",
      "query": "usage_location:Padua AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.paris",
    "type": "groups/custom",
    "attributes": {
      "name": "paris",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Paris",
      "query": "usage_location:Paris AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.pennsylvania",
    "type": "groups/custom",
    "attributes": {
      "name": "pennsylvania",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Pennsylvania",
      "query": "usage_location:Pennsylvania AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.porto",
    "type": "groups/custom",
    "attributes": {
      "name": "porto",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Porto",
      "query": "usage_location:Porto AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.product_engineering_mobile",
    "type": "groups/custom",
    "attributes": {
      "name": "product_engineering_mobile",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Product_Engineering_Mobile",
      "query": "status:registered AND (group:custom_department_engineering OR group:custom_department_product) AND (platforms:ios OR platforms:android)",
      "tags": [],
      "total-users": 49,
      "order": []
    }
  }, {
    "id": "custom.provence_alpes_cote_d_azur",
    "type": "groups/custom",
    "attributes": {
      "name": "provence_alpes_cote_d_azur",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Provence-Alpes-Côte d'Azur",
      "query": "usage_location:\"Provence-Alpes-Côte d'Azur\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.province_of_arezzo",
    "type": "groups/custom",
    "attributes": {
      "name": "province_of_arezzo",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Province of Arezzo",
      "query": "usage_location:\"Province of Arezzo\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.provincia_di_lucca",
    "type": "groups/custom",
    "attributes": {
      "name": "provincia_di_lucca",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Provincia di Lucca",
      "query": "usage_location:\"Provincia di Lucca\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.qasource",
    "type": "groups/custom",
    "attributes": {
      "name": "qasource",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "QASource",
      "query": "twitter.status:not_connected",
      "tags": [],
      "total-users": 575,
      "order": []
    }
  }, {
    "id": "custom.quebec",
    "type": "groups/custom",
    "attributes": {
      "name": "quebec",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Quebec",
      "query": "usage_location:Quebec AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.rbtest_group",
    "type": "groups/custom",
    "attributes": {
      "name": "rbtest_group",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "RBTest Group",
      "query": "user_id:(666965 OR 693929 OR 550316 OR 239142 OR 361981)",
      "tags": [],
      "total-users": 5,
      "order": []
    }
  }, {
    "id": "custom.remote_employees_not_following_channels_156114",
    "type": "groups/custom",
    "attributes": {
      "name": "remote_employees_not_following_channels_156114",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Remote Employees - Not following channels",
      "query": "group:follows_0_channels",
      "tags": [],
      "total-users": 79,
      "order": []
    }
  }, {
    "id": "custom.remote_employees_not_following_channels_163453",
    "type": "groups/custom",
    "attributes": {
      "name": "remote_employees_not_following_channels_163453",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "remote employees - not following channels",
      "query": "group:follows_0_channels",
      "tags": [],
      "total-users": 79,
      "order": []
    }
  }, {
    "id": "custom.remote_not_following_channels",
    "type": "groups/custom",
    "attributes": {
      "name": "remote_not_following_channels",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Remote Not Following Channels",
      "query": "group:follows_0_channels",
      "tags": [],
      "total-users": 79,
      "order": []
    }
  }, {
    "id": "custom.reynolds",
    "type": "groups/custom",
    "attributes": {
      "name": "reynolds",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Reynolds",
      "query": "channels.name:Reynolds AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.royal_kensington_and_chelsea",
    "type": "groups/custom",
    "attributes": {
      "name": "royal_kensington_and_chelsea",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Royal Kensington and Chelsea",
      "query": "usage_location:\"Royal Kensington and Chelsea\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.sales_development",
    "type": "groups/custom",
    "attributes": {
      "name": "sales_development",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Sales Development",
      "query": "user_id:(681711 OR 530248 OR 645246 OR 645252 OR 233713 OR 392881 OR 502436 OR 156677 OR 394948 OR 480448 OR 354359 OR 400071 OR 600172 OR 645253 OR 645249 OR 645250)",
      "tags": [],
      "total-users": 16,
      "order": []
    }
  }, {
    "id": "custom.sales_team",
    "type": "groups/custom",
    "attributes": {
      "name": "sales_team",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Sales Team",
      "query": "user_id:(600100 OR 642504 OR 563712 OR 72466 OR 38108 OR 38109 OR 272684 OR 205773 OR 36971 OR 40647 OR 236203 OR 172566 OR 37832 OR 262721 OR 480448 OR 38032)",
      "tags": [],
      "total-users": 16,
      "order": []
    }
  }, {
    "id": "custom.sales_team_b",
    "type": "groups/custom",
    "attributes": {
      "name": "sales_team_b",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Sales Team B",
      "query": "user_id:(38032 OR 480448 OR 262721 OR 272684 OR 236203 OR 205773 OR 72466 OR 37832 OR 38109 OR 156677 OR 435716 OR 36971 OR 38108)",
      "tags": [],
      "total-users": 13,
      "order": []
    }
  }, {
    "id": "custom.sc_remote_4_6_17",
    "type": "groups/custom",
    "attributes": {
      "name": "sc_remote_4_6_17",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "SC Remote - 4/6/17",
      "query": "user_id:(409512 OR 167230 OR 25160 OR 391148 OR 115701 OR 391108 OR 344942 OR 252874 OR 340257 OR 117301 OR 337767 OR 241798 OR 182203 OR 332849 OR 131121 OR 118834 OR 37796 OR 388905 OR 276469 OR 399166 OR 205426 OR 366608 OR 384489 OR 362125 OR 241815 OR 149722 OR 375278 OR 362493 OR 197978 OR 116535 OR 307902 OR 37833 OR 181076 OR 405469 OR 75473 OR 336370 OR 391121)",
      "tags": [],
      "total-users": 35,
      "order": []
    }
  }, {
    "id": "custom.sean_douglas",
    "type": "groups/custom",
    "attributes": {
      "name": "sean_douglas",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Sean Douglas",
      "query": "user_id:(600172)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.sf_new_hires_103233",
    "type": "groups/custom",
    "attributes": {
      "name": "sf_new_hires_103233",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "SF New Hires",
      "query": "",
      "tags": [],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.sf_new_hires_103234",
    "type": "groups/custom",
    "attributes": {
      "name": "sf_new_hires_103234",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "SF New Hires",
      "query": "",
      "tags": [],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.sf_office_10_2_17",
    "type": "groups/custom",
    "attributes": {
      "name": "sf_office_10_2_17",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "SF OFFICE 10/2/17",
      "query": "user_id:(534277 OR 491294 OR 502672 OR 435716 OR 167230 OR 438469 OR 436174 OR 296412 OR 239142 OR 219304 OR 38032 OR 400071 OR 354359 OR 480448 OR 262721 OR 394948 OR 62031 OR 282979 OR 67903 OR 172566 OR 510028 OR 236203 OR 340832 OR 115701 OR 230039 OR 397178 OR 40647 OR 453947 OR 156677 OR 523146 OR 36971 OR 324539 OR 502436 OR 41968 OR 205773 OR 392881 OR 272684 OR 233713 OR 38109 OR 38108 OR 239712 OR 37836 OR 396357 OR 72466 OR 530248)",
      "tags": [],
      "total-users": 45,
      "order": []
    }
  }, {
    "id": "custom.sf_office_8_2",
    "type": "groups/custom",
    "attributes": {
      "name": "sf_office_8_2",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "SF Office (8/2)",
      "query": "user_id:(453947 OR 241769 OR 38108 OR 72466 OR 239712 OR 233713 OR 40647 OR 396357 OR 37836 OR 394948 OR 438469 OR 38109 OR 354359 OR 62031 OR 263691 OR 486145 OR 38032 OR 296412 OR 37832 OR 457124 OR 282979 OR 272684 OR 36971 OR 397178 OR 324539 OR 230039 OR 436174 OR 236203 OR 231652 OR 205773 OR 219304 OR 239142 OR 435716 OR 156677 OR 67903 OR 262721 OR 400071 OR 340832 OR 172566 OR 392881 OR 480448)",
      "tags": [],
      "total-users": 41,
      "order": []
    }
  }, {
    "id": "custom.sharmila_test",
    "type": "groups/custom",
    "attributes": {
      "name": "sharmila_test",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Sharmila Test",
      "query": "status:registered AND email:\"sharmila.chardavoyne@socialchorus.com\"",
      "tags": ["channels"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.sicily",
    "type": "groups/custom",
    "attributes": {
      "name": "sicily",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Sicily",
      "query": "usage_location:Sicily AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.sko_compliance_comms",
    "type": "groups/custom",
    "attributes": {
      "name": "sko_compliance_comms",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "SKO - Compliance Comms",
      "query": "user_id:(397178 OR 645246 OR 563712 OR 399166 OR 394652)",
      "tags": [],
      "total-users": 5,
      "order": []
    }
  }, {
    "id": "custom.slough",
    "type": "groups/custom",
    "attributes": {
      "name": "slough",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Slough",
      "query": "usage_location:Slough AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.south_carolina",
    "type": "groups/custom",
    "attributes": {
      "name": "south_carolina",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "South Carolina",
      "query": "usage_location:\"South Carolina\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.support_manual_test",
    "type": "groups/custom",
    "attributes": {
      "name": "support_manual_test",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Support manual test",
      "query": "user_id:(238703 OR 236336 OR 236203 OR 235022 OR 235021 OR 235012 OR 234872 OR 233653 OR 194456 OR 194455 OR 179036 OR 179165 OR 179192 OR 179196 OR 180440 OR 181076 OR 181611 OR 182203 OR 182692 OR 183241 OR 184719 OR 183604 OR 184873 OR 186516 OR 188029 OR 189785 OR 190408 OR 191884 OR 192042 OR 193046 OR 178955 OR 178934 OR 178439 OR 177806 OR 175308 OR 173187 OR 172832 OR 173160 OR 172818 OR 172566 OR 172445 OR 171943 OR 171237 OR 171233 OR 171228 OR 170523 OR 169525 OR 169524 OR 169500 OR 168738 OR 168737 OR 168650 OR 167230 OR 164877 OR 52688 OR 36813 OR 36790 OR 36761 OR 36505 OR 36146 OR 36054 OR 36036 OR 35967 OR 35807 OR 35582 OR 35532 OR 35470 OR 35463 OR 35457 OR 35442 OR 34342 OR 34339 OR 34304 OR 34076 OR 34075 OR 33969 OR 33941 OR 33740 OR 33599 OR 33325 OR 33048 OR 31965 OR 31461 OR 31453 OR 31430 OR 30917 OR 30101 OR 28357 OR 28332 OR 28204 OR 27961 OR 27521 OR 27495 OR 25160 OR 25100 OR 23671 OR 20150 OR 21960 OR 18748 OR 10972 OR 3507 OR 3454 OR 3084 OR 268)",
      "tags": [],
      "total-users": 104,
      "order": []
    }
  }, {
    "id": "custom.support_services",
    "type": "groups/custom",
    "attributes": {
      "name": "support_services",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Support Services",
      "query": "user_id:(336370 OR 405469 OR 528194 OR 430060 OR 412128 OR 76916 OR 620722 OR 62031 OR 37796)",
      "tags": [],
      "total-users": 9,
      "order": []
    }
  }, {
    "id": "custom.swag",
    "type": "groups/custom",
    "attributes": {
      "name": "swag",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Swag",
      "query": "user_id:(167230 OR 510381 OR 394948 OR 25160 OR 241798 OR 453947 OR 172566 OR 534277)",
      "tags": [],
      "total-users": 8,
      "order": []
    }
  }, {
    "id": "custom.swindon",
    "type": "groups/custom",
    "attributes": {
      "name": "swindon",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Swindon",
      "query": "usage_location:Swindon AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.td_news",
    "type": "groups/custom",
    "attributes": {
      "name": "td_news",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "TD News",
      "query": "channels.name:\"TD News\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.teamseattle",
    "type": "groups/custom",
    "attributes": {
      "name": "teamseattle",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "TeamSeattle",
      "query": "usage_location:Washington AND status:registered",
      "tags": [],
      "total-users": 15,
      "order": []
    }
  }, {
    "id": "custom.tech_support",
    "type": "groups/custom",
    "attributes": {
      "name": "tech_support",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Tech Support",
      "query": "user_id:(405469 OR 412128 OR 336370)",
      "tags": [],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "custom.tennessee",
    "type": "groups/custom",
    "attributes": {
      "name": "tennessee",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Tennessee",
      "query": "usage_location:Tennessee AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "custom.test_channel_for_jacob",
    "type": "groups/custom",
    "attributes": {
      "name": "test_channel_for_jacob",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Test Channel for Jacob",
      "query": "channels.name:\"Test Channel for Jacob\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.test_group",
    "type": "groups/custom",
    "attributes": {
      "name": "test_group",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Test Group",
      "query": "user_id:(38109)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.test_manish",
    "type": "groups/custom",
    "attributes": {
      "name": "test_manish",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Test - Manish",
      "query": "name:Manish AND status:registered",
      "tags": [],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.test_nate",
    "type": "groups/custom",
    "attributes": {
      "name": "test_nate",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Test (nate)",
      "query": "user_id:(400071)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.test_pagination",
    "type": "groups/custom",
    "attributes": {
      "name": "test_pagination",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Test Pagination",
      "query": "status:registered",
      "tags": [],
      "total-users": 210,
      "order": []
    }
  }, {
    "id": "custom.test_rename",
    "type": "groups/custom",
    "attributes": {
      "name": "test_rename",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "test - rename",
      "query": "channels.name:\"test - rename\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.texas",
    "type": "groups/custom",
    "attributes": {
      "name": "texas",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Texas",
      "query": "usage_location:Texas AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 6,
      "order": []
    }
  }, {
    "id": "custom.thanh_pho_ha_noi",
    "type": "groups/custom",
    "attributes": {
      "name": "thanh_pho_ha_noi",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Thanh Pho Ha Noi",
      "query": "usage_location:\"Thanh Pho Ha Noi\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.the_brandon_s",
    "type": "groups/custom",
    "attributes": {
      "name": "the_brandon_s",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "The Brandon's!",
      "query": "user_id:(38109 OR 233713)",
      "tags": [],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "custom.the_gillians",
    "type": "groups/custom",
    "attributes": {
      "name": "the_gillians",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "The Gillians",
      "query": "user_id:(398211 OR 127009 OR 85329 OR 76916 OR 49255 OR 79467 OR 44634 OR 252874)",
      "tags": [],
      "total-users": 8,
      "order": []
    }
  }, {
    "id": "custom.tokyo",
    "type": "groups/custom",
    "attributes": {
      "name": "tokyo",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Tokyo",
      "query": "usage_location:Tokyo AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.tuscany",
    "type": "groups/custom",
    "attributes": {
      "name": "tuscany",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Tuscany",
      "query": "usage_location:Tuscany AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.us_183496",
    "type": "groups/custom",
    "attributes": {
      "name": "us_183496",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "us",
      "query": "custom.country:us AND status:registered",
      "tags": ["location", "saml"],
      "total-users": 6,
      "order": []
    }
  }, {
    "id": "custom.utah",
    "type": "groups/custom",
    "attributes": {
      "name": "utah",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Utah",
      "query": "usage_location:Utah AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.uttar_pradesh",
    "type": "groups/custom",
    "attributes": {
      "name": "uttar_pradesh",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Uttar Pradesh",
      "query": "usage_location:\"Uttar Pradesh\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.veeru_s_test_group",
    "type": "groups/custom",
    "attributes": {
      "name": "veeru_s_test_group",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Veeru's test group",
      "query": "user_id:(435716)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.veneto",
    "type": "groups/custom",
    "attributes": {
      "name": "veneto",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Veneto",
      "query": "usage_location:Veneto AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.vermont",
    "type": "groups/custom",
    "attributes": {
      "name": "vermont",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Vermont",
      "query": "usage_location:Vermont AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.vicki_demo_group",
    "type": "groups/custom",
    "attributes": {
      "name": "vicki_demo_group",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Vicki Demo Group",
      "query": "user_id:(563712)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.vicki_spacko",
    "type": "groups/custom",
    "attributes": {
      "name": "vicki_spacko",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Vicki Spacko",
      "query": "user_id:(563712)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.victoria",
    "type": "groups/custom",
    "attributes": {
      "name": "victoria",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Victoria",
      "query": "usage_location:Victoria AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.virginia",
    "type": "groups/custom",
    "attributes": {
      "name": "virginia",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Virginia",
      "query": "usage_location:Virginia AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.vlab_group",
    "type": "groups/custom",
    "attributes": {
      "name": "vlab_group",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "VLAB Group",
      "query": "user_id:(156677 OR 40647 OR 296412)",
      "tags": [],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "custom.washington",
    "type": "groups/custom",
    "attributes": {
      "name": "washington",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Washington",
      "query": "usage_location:Washington AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 15,
      "order": []
    }
  }, {
    "id": "custom.web",
    "type": "groups/custom",
    "attributes": {
      "name": "web",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Web",
      "query": "custom.front_end_application:Web AND status:registered",
      "tags": [],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.westrock",
    "type": "groups/custom",
    "attributes": {
      "name": "westrock",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Westrock",
      "query": "channels.name:Westrock AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.will_test",
    "type": "groups/custom",
    "attributes": {
      "name": "will_test",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Will test",
      "query": "user_id:(519531 OR 172566 OR 219304 OR 534277)",
      "tags": [],
      "total-users": 4,
      "order": []
    }
  }, {
    "id": "custom.wisconsin",
    "type": "groups/custom",
    "attributes": {
      "name": "wisconsin",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Wisconsin",
      "query": "usage_location:Wisconsin AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.women_in_business",
    "type": "groups/custom",
    "attributes": {
      "name": "women_in_business",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Women in Business",
      "query": "channels.name:\"Women in Business\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.yangon_region",
    "type": "groups/custom",
    "attributes": {
      "name": "yangon_region",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Yangon Region",
      "query": "usage_location:\"Yangon Region\" AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.z_labs_italian",
    "type": "groups/custom",
    "attributes": {
      "name": "z_labs_italian",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "z Labs - Italian",
      "query": "channels.name:\"z Labs - Italian\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.z_labs_myanmar",
    "type": "groups/custom",
    "attributes": {
      "name": "z_labs_myanmar",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "z Labs - Myanmar",
      "query": "channels.name:\"z Labs - Myanmar\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.z_labs_portugese",
    "type": "groups/custom",
    "attributes": {
      "name": "z_labs_portugese",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "z Labs - Portugese",
      "query": "channels.name:\"z Labs - Portugese\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.z_labs_spanish",
    "type": "groups/custom",
    "attributes": {
      "name": "z_labs_spanish",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "z Labs - Spanish",
      "query": "channels.name:\"z Labs - Spanish\" AND status:registered",
      "tags": ["channels"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.zurich",
    "type": "groups/custom",
    "attributes": {
      "name": "zurich",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "Zurich",
      "query": "usage_location:Zurich AND status:registered",
      "tags": ["engagement", "location"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.zzz_digital_social_trends",
    "type": "groups/custom",
    "attributes": {
      "name": "zzz_digital_social_trends",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "zzz-Digital \u0026 Social Trends",
      "query": "channels.name:\"zzz-Digital \u0026 Social Trends\" AND status:registered",
      "tags": ["channels"],
      "total-users": 11,
      "order": []
    }
  }, {
    "id": "custom.zzz_only_one_content_testing",
    "type": "groups/custom",
    "attributes": {
      "name": "zzz_only_one_content_testing",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "zzz-Only one content(testing)",
      "query": "channels.name:\"zzz-Only one content(testing)\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.zzz_social_networks",
    "type": "groups/custom",
    "attributes": {
      "name": "zzz_social_networks",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "zzz-Social Networks",
      "query": "channels.name:\"zzz-Social Networks\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "custom.zzz_training",
    "type": "groups/custom",
    "attributes": {
      "name": "zzz_training",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "zzz-Training",
      "query": "channels.name:\"zzz-Training\" AND status:registered",
      "tags": ["channels"],
      "total-users": 16,
      "order": []
    }
  }, {
    "id": "custom.zzz_vicki_demo",
    "type": "groups/custom",
    "attributes": {
      "name": "zzz_vicki_demo",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "ZZZ Vicki Demo",
      "query": "user_id:(563712)",
      "tags": [],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "custom.zzz_vision_mission",
    "type": "groups/custom",
    "attributes": {
      "name": "zzz_vision_mission",
      "type": "custom",
      "state": "enabled",
      "program-id": 176,
      "title": "zzz-Vision \u0026 Mission",
      "query": "channels.name:\"zzz-Vision \u0026 Mission\" AND status:registered",
      "tags": ["channels"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "standard.active_last_30_days",
    "type": "groups/standard",
    "attributes": {
      "name": "active_last_30_days",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Active in the Last 30 Days",
      "query": "last_active:[\"now-30d/d\" TO today] AND status:registered",
      "tags": ["engagement"],
      "total-users": 125,
      "order": []
    }
  }, {
    "id": "standard.active_this_month",
    "type": "groups/standard",
    "attributes": {
      "name": "active_this_month",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Active This Month",
      "query": "last_active:this_month AND status:registered",
      "tags": ["engagement", "highlighted"],
      "total-users": 125,
      "order": []
    }
  }, {
    "id": "standard.analysts",
    "type": "groups/standard",
    "attributes": {
      "name": "analysts",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Analysts",
      "query": "role:analyst AND status:registered",
      "tags": ["profile", "role"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "standard.android_only_users",
    "type": "groups/standard",
    "attributes": {
      "name": "android_only_users",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Android Only Users",
      "query": "platforms:android AND NOT platforms:ios AND NOT platforms:web AND status:registered",
      "tags": ["android", "engagement"],
      "total-users": 12,
      "order": []
    }
  }, {
    "id": "standard.android_users",
    "type": "groups/standard",
    "attributes": {
      "name": "android_users",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Android Users",
      "query": "platforms:android AND status:registered",
      "tags": ["android", "engagement"],
      "total-users": 71,
      "order": []
    }
  }, {
    "id": "standard.blocked",
    "type": "groups/standard",
    "attributes": {
      "name": "blocked",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Blocked",
      "query": "status:blocked",
      "tags": ["highlighted", "profile", "status"],
      "total-users": 420,
      "order": []
    }
  }, {
    "id": "standard.brand_admins",
    "type": "groups/standard",
    "attributes": {
      "name": "brand_admins",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Brand Admins",
      "query": "role:brand_admin AND status:registered",
      "tags": ["admin", "profile", "role"],
      "total-users": 31,
      "order": []
    }
  }, {
    "id": "standard.created",
    "type": "groups/standard",
    "attributes": {
      "name": "created",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Created Members",
      "query": "status:created AND role:member",
      "tags": ["profile", "role", "status"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "standard.facebook_connected",
    "type": "groups/standard",
    "attributes": {
      "name": "facebook_connected",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Facebook Connected",
      "query": "facebook.status:connected AND status:registered",
      "tags": ["facebook", "social"],
      "total-users": 10,
      "order": []
    }
  }, {
    "id": "standard.facebook_disconnected",
    "type": "groups/standard",
    "attributes": {
      "name": "facebook_disconnected",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Facebook Disconnected",
      "query": "facebook.status:disconnected AND status:registered",
      "tags": ["facebook", "social"],
      "total-users": 180,
      "order": []
    }
  }, {
    "id": "standard.facebook_expired",
    "type": "groups/standard",
    "attributes": {
      "name": "facebook_expired",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Facebook Expired",
      "query": "facebook.status:expired AND status:registered",
      "tags": ["facebook", "social"],
      "total-users": 20,
      "order": []
    }
  }, {
    "id": "standard.follows_0_channels",
    "type": "groups/standard",
    "attributes": {
      "name": "follows_0_channels",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Follows 0 Channels",
      "query": "channels.count:0 AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 79,
      "order": []
    }
  }, {
    "id": "standard.follows_1_channel",
    "type": "groups/standard",
    "attributes": {
      "name": "follows_1_channel",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Follows 1 Channel",
      "query": "channels.count:1 AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 6,
      "order": []
    }
  }, {
    "id": "standard.follows_multiple_channels",
    "type": "groups/standard",
    "attributes": {
      "name": "follows_multiple_channels",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Follows Multiple Channels",
      "query": "channels.count:\u003e1 AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 125,
      "order": []
    }
  }, {
    "id": "standard.guests",
    "type": "groups/standard",
    "attributes": {
      "name": "guests",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Guests",
      "query": "status:guest",
      "tags": ["profile", "status"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "standard.inactive_last_30_days",
    "type": "groups/standard",
    "attributes": {
      "name": "inactive_last_30_days",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Inactive in the Last 30 Days",
      "query": "NOT last_active:last_30_days AND status:registered",
      "tags": ["engagement"],
      "total-users": 85,
      "order": []
    }
  }, {
    "id": "standard.inactive_this_month",
    "type": "groups/standard",
    "attributes": {
      "name": "inactive_this_month",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Inactive This Month",
      "query": "NOT last_active:this_month AND status:registered",
      "tags": ["engagement"],
      "total-users": 85,
      "order": []
    }
  }, {
    "id": "standard.instagram_connected",
    "type": "groups/standard",
    "attributes": {
      "name": "instagram_connected",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Instagram Connected",
      "query": "instagram.status:connected AND status:registered",
      "tags": ["instagram", "social"],
      "total-users": 4,
      "order": []
    }
  }, {
    "id": "standard.instagram_disconnected",
    "type": "groups/standard",
    "attributes": {
      "name": "instagram_disconnected",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Instagram Disconnected",
      "query": "instagram.status:disconnected AND status:registered",
      "tags": ["instagram", "social"],
      "total-users": 195,
      "order": []
    }
  }, {
    "id": "standard.instagram_expired",
    "type": "groups/standard",
    "attributes": {
      "name": "instagram_expired",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Instagram Expired",
      "query": "instagram.status:expired AND status:registered",
      "tags": ["instagram", "social"],
      "total-users": 11,
      "order": []
    }
  }, {
    "id": "standard.invited",
    "type": "groups/standard",
    "attributes": {
      "name": "invited",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Invited Members",
      "query": "status:invited AND role:member",
      "tags": ["profile", "role", "status"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "standard.ios_only_users",
    "type": "groups/standard",
    "attributes": {
      "name": "ios_only_users",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "iOS Only Users",
      "query": "platforms:ios AND NOT platforms:android AND NOT platforms:web AND status:registered",
      "tags": ["engagement", "ios"],
      "total-users": 12,
      "order": []
    }
  }, {
    "id": "standard.ios_users",
    "type": "groups/standard",
    "attributes": {
      "name": "ios_users",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "iOS Users",
      "query": "platforms:ios AND status:registered",
      "tags": ["engagement", "ios"],
      "total-users": 115,
      "order": []
    }
  }, {
    "id": "standard.joined_last_month",
    "type": "groups/standard",
    "attributes": {
      "name": "joined_last_month",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Joined Last Month",
      "query": "joined:last_month AND status:registered",
      "tags": ["monthly", "profile"],
      "total-users": 16,
      "order": []
    }
  }, {
    "id": "standard.joined_last_quarter",
    "type": "groups/standard",
    "attributes": {
      "name": "joined_last_quarter",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Joined Last Quarter",
      "query": "joined:last_quarter AND status:registered",
      "tags": ["profile", "quarter"],
      "total-users": 28,
      "order": []
    }
  }, {
    "id": "standard.joined_last_week",
    "type": "groups/standard",
    "attributes": {
      "name": "joined_last_week",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Joined Last Week",
      "query": "joined:last_week AND status:registered",
      "tags": ["profile", "weekly"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "standard.joined_last_year",
    "type": "groups/standard",
    "attributes": {
      "name": "joined_last_year",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Joined Last Year",
      "query": "joined:last_year AND status:registered",
      "tags": ["profile", "year"],
      "total-users": 92,
      "order": []
    }
  }, {
    "id": "standard.joined_this_month",
    "type": "groups/standard",
    "attributes": {
      "name": "joined_this_month",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Joined This Month",
      "query": "joined:this_month AND status:registered",
      "tags": ["monthly", "profile"],
      "total-users": 17,
      "order": []
    }
  }, {
    "id": "standard.joined_this_quarter",
    "type": "groups/standard",
    "attributes": {
      "name": "joined_this_quarter",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Joined This Quarter",
      "query": "joined:this_quarter AND status:registered",
      "tags": ["profile", "quarter"],
      "total-users": 48,
      "order": []
    }
  }, {
    "id": "standard.joined_this_week",
    "type": "groups/standard",
    "attributes": {
      "name": "joined_this_week",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Joined This Week",
      "query": "joined:this_week AND status:registered",
      "tags": ["profile", "weekly"],
      "total-users": 5,
      "order": []
    }
  }, {
    "id": "standard.joined_this_year",
    "type": "groups/standard",
    "attributes": {
      "name": "joined_this_year",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Joined This Year",
      "query": "joined:this_year AND status:registered",
      "tags": ["profile", "year"],
      "total-users": 48,
      "order": []
    }
  }, {
    "id": "standard.joined_today",
    "type": "groups/standard",
    "attributes": {
      "name": "joined_today",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Joined Today",
      "query": "joined:today AND status:registered",
      "tags": ["profile"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "standard.joined_yesterday",
    "type": "groups/standard",
    "attributes": {
      "name": "joined_yesterday",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Joined Yesterday",
      "query": "joined:yesterday AND status:registered",
      "tags": ["profile"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "standard.linkedin_connected",
    "type": "groups/standard",
    "attributes": {
      "name": "linkedin_connected",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Linkedin Connected",
      "query": "linkedin.status:connected AND status:registered",
      "tags": ["linkedin", "social"],
      "total-users": 9,
      "order": []
    }
  }, {
    "id": "standard.linkedin_disconnected",
    "type": "groups/standard",
    "attributes": {
      "name": "linkedin_disconnected",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Linkedin Disconnected",
      "query": "linkedin.status:disconnected AND status:registered",
      "tags": ["linkedin", "social"],
      "total-users": 164,
      "order": []
    }
  }, {
    "id": "standard.linkedin_expired",
    "type": "groups/standard",
    "attributes": {
      "name": "linkedin_expired",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Linkedin Expired",
      "query": "linkedin.status:expired AND status:registered",
      "tags": ["linkedin", "social"],
      "total-users": 37,
      "order": []
    }
  }, {
    "id": "standard.members",
    "type": "groups/standard",
    "attributes": {
      "name": "members",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Members",
      "query": "role:member AND status:registered",
      "tags": ["profile", "role"],
      "total-users": 105,
      "order": []
    }
  }, {
    "id": "standard.not_blocked",
    "type": "groups/standard",
    "attributes": {
      "name": "not_blocked",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Not Blocked",
      "query": "NOT status:blocked",
      "tags": ["profile", "status"],
      "total-users": 296,
      "order": []
    }
  }, {
    "id": "standard.not_reachable_by_push",
    "type": "groups/standard",
    "attributes": {
      "name": "not_reachable_by_push",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Not Reachable by Push Notification",
      "query": "reachable_by_push_notification:false AND status:registered",
      "tags": ["connect", "push"],
      "total-users": 81,
      "order": []
    }
  }, {
    "id": "standard.no_verified_email",
    "type": "groups/standard",
    "attributes": {
      "name": "no_verified_email",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Unverified Email",
      "query": "verified_email:false AND status:registered",
      "tags": ["connect", "email"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "standard.program_admins",
    "type": "groups/standard",
    "attributes": {
      "name": "program_admins",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Program Admins",
      "query": "role:program_admin AND status:registered",
      "tags": ["admin", "profile", "role"],
      "total-users": 5,
      "order": []
    }
  }, {
    "id": "standard.publishers",
    "type": "groups/standard",
    "attributes": {
      "name": "publishers",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Publishers",
      "query": "role:publisher AND status:registered",
      "tags": ["profile", "role"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "standard.reachable",
    "type": "groups/standard",
    "attributes": {
      "name": "reachable",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Reachable",
      "query": "(verified_email:true OR reachable_by_push_notification:true) AND status:registered",
      "tags": ["connect", "email", "push"],
      "total-users": 210,
      "order": []
    }
  }, {
    "id": "standard.reachable_by_push",
    "type": "groups/standard",
    "attributes": {
      "name": "reachable_by_push",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Reachable by Push Notification",
      "query": "reachable_by_push_notification:true AND status:registered",
      "tags": ["connect", "push"],
      "total-users": 129,
      "order": []
    }
  }, {
    "id": "standard.registration_complete",
    "type": "groups/standard",
    "attributes": {
      "name": "registration_complete",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Registration Complete",
      "query": "status:registered",
      "tags": ["highlighted", "profile", "status"],
      "total-users": 210,
      "order": []
    }
  }, {
    "id": "standard.registration_incomplete",
    "type": "groups/standard",
    "attributes": {
      "name": "registration_incomplete",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Registration Incomplete",
      "query": "status:pending",
      "tags": ["highlighted", "profile", "status"],
      "total-users": 74,
      "order": []
    }
  }, {
    "id": "standard.sharers",
    "type": "groups/standard",
    "attributes": {
      "name": "sharers",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Sharers",
      "query": "shares.count.all_time:\u003e0 AND status:registered",
      "tags": ["advocacy", "shares"],
      "total-users": 84,
      "order": []
    }
  }, {
    "id": "standard.sharers_last_month",
    "type": "groups/standard",
    "attributes": {
      "name": "sharers_last_month",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Sharers Last Month",
      "query": "shares.count.last_month:\u003e0 AND status:registered",
      "tags": ["advocacy", "monthly", "shares"],
      "total-users": 36,
      "order": []
    }
  }, {
    "id": "standard.sharers_last_week",
    "type": "groups/standard",
    "attributes": {
      "name": "sharers_last_week",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Sharers Last Week",
      "query": "shares.count.last_week:\u003e0 AND status:registered",
      "tags": ["advocacy", "shares", "weekly"],
      "total-users": 20,
      "order": []
    }
  }, {
    "id": "standard.sharers_this_month",
    "type": "groups/standard",
    "attributes": {
      "name": "sharers_this_month",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Sharers This Month",
      "query": "shares.count.this_month:\u003e0 AND status:registered",
      "tags": ["advocacy", "monthly", "shares"],
      "total-users": 35,
      "order": []
    }
  }, {
    "id": "standard.sharers_this_week",
    "type": "groups/standard",
    "attributes": {
      "name": "sharers_this_week",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Sharers This Week",
      "query": "shares.count.this_week:\u003e0 AND status:registered",
      "tags": ["advocacy", "shares", "weekly"],
      "total-users": 25,
      "order": []
    }
  }, {
    "id": "standard.super_admins",
    "type": "groups/standard",
    "attributes": {
      "name": "super_admins",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Super Admins",
      "query": "role:super_admin AND status:registered",
      "tags": ["admin", "profile", "role"],
      "total-users": 65,
      "order": []
    }
  }, {
    "id": "standard.top_10_advocates",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10_advocates",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10 Advocates",
      "query": "advocacy_rank.all_time:\u003c=10 AND status:registered",
      "tags": ["advocacy"],
      "total-users": 4,
      "order": []
    }
  }, {
    "id": "standard.top_10_advocates_last_month",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10_advocates_last_month",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10 Advocates Last Month",
      "query": "advocacy_rank.last_month:\u003c=10 AND status:registered",
      "tags": ["advocacy", "monthly"],
      "total-users": 10,
      "order": []
    }
  }, {
    "id": "standard.top_10_advocates_last_quarter",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10_advocates_last_quarter",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10 Advocates Last Quarter",
      "query": "advocacy_rank.last_quarter:\u003c=10 AND status:registered",
      "tags": ["advocacy", "quarterly"],
      "total-users": 10,
      "order": []
    }
  }, {
    "id": "standard.top_10_advocates_last_week",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10_advocates_last_week",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10 Advocates Last Week",
      "query": "advocacy_rank.last_week:\u003c=10 AND status:registered",
      "tags": ["advocacy", "weekly"],
      "total-users": 11,
      "order": []
    }
  }, {
    "id": "standard.top_10_advocates_last_year",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10_advocates_last_year",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10 Advocates Last Year",
      "query": "advocacy_rank.last_year:\u003c=10 AND status:registered",
      "tags": ["advocacy", "yearly"],
      "total-users": 9,
      "order": []
    }
  }, {
    "id": "standard.top_10_advocates_this_month",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10_advocates_this_month",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10 Advocates This Month",
      "query": "advocacy_rank.this_month:\u003c=10 AND status:registered",
      "tags": ["advocacy", "monthly"],
      "total-users": 11,
      "order": []
    }
  }, {
    "id": "standard.top_10_advocates_this_quarter",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10_advocates_this_quarter",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10 Advocates This Quarter",
      "query": "advocacy_rank.this_quarter:\u003c=10 AND status:registered",
      "tags": ["advocacy", "quarterly"],
      "total-users": 10,
      "order": []
    }
  }, {
    "id": "standard.top_10_advocates_this_week",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10_advocates_this_week",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10 Advocates This Week",
      "query": "advocacy_rank.this_week:\u003c=10 AND status:registered",
      "tags": ["advocacy", "weekly"],
      "total-users": 11,
      "order": []
    }
  }, {
    "id": "standard.top_10_advocates_this_year",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10_advocates_this_year",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10 Advocates This Year",
      "query": "advocacy_rank.this_year:\u003c=10 AND status:registered",
      "tags": ["advocacy", "yearly"],
      "total-users": 10,
      "order": []
    }
  }, {
    "id": "standard.top_10p_advocates",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10p_advocates",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10% Advocates",
      "query": "advocacy_percentile.all_time:\u003c=10 AND status:registered",
      "tags": ["advocacy"],
      "total-users": 6,
      "order": []
    }
  }, {
    "id": "standard.top_10p_advocates_last_month",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10p_advocates_last_month",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10% Advocates Last Month",
      "query": "advocacy_percentile.last_month:\u003e=90 AND status:registered",
      "tags": ["advocacy", "monthly"],
      "total-users": 4,
      "order": []
    }
  }, {
    "id": "standard.top_10p_advocates_last_quarter",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10p_advocates_last_quarter",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10% Advocates Last Quarter",
      "query": "advocacy_percentile.last_quarter:\u003e=90 AND status:registered",
      "tags": ["advocacy", "quarterly"],
      "total-users": 6,
      "order": []
    }
  }, {
    "id": "standard.top_10p_advocates_last_week",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10p_advocates_last_week",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10% Advocates Last Week",
      "query": "advocacy_percentile.last_week:\u003e=90 AND status:registered",
      "tags": ["advocacy", "weekly"],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "standard.top_10p_advocates_last_year",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10p_advocates_last_year",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10% Advocates Last Year",
      "query": "advocacy_percentile.last_year:\u003e=90 AND status:registered",
      "tags": ["advocacy", "yearly"],
      "total-users": 8,
      "order": []
    }
  }, {
    "id": "standard.top_10p_advocates_this_month",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10p_advocates_this_month",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10% Advocates This Month",
      "query": "advocacy_percentile.this_month:\u003e=90 AND status:registered",
      "tags": ["advocacy", "monthly"],
      "total-users": 4,
      "order": []
    }
  }, {
    "id": "standard.top_10p_advocates_this_quarter",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10p_advocates_this_quarter",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10% Advocates This Quarter",
      "query": "advocacy_percentile.this_quarter:\u003e=90 AND status:registered",
      "tags": ["advocacy", "quarterly"],
      "total-users": 6,
      "order": []
    }
  }, {
    "id": "standard.top_10p_advocates_this_week",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10p_advocates_this_week",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10% Advocates This Week",
      "query": "advocacy_percentile.this_week:\u003e=90 AND status:registered",
      "tags": ["advocacy", "weekly"],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "standard.top_10p_advocates_this_year",
    "type": "groups/standard",
    "attributes": {
      "name": "top_10p_advocates_this_year",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 10% Advocates This Year",
      "query": "advocacy_percentile.this_year:\u003e=90 AND status:registered",
      "tags": ["advocacy", "yearly"],
      "total-users": 6,
      "order": []
    }
  }, {
    "id": "standard.top_5_advocates",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5_advocates",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5 Advocates",
      "query": "advocacy_rank.all_time:\u003c=5 AND status:registered",
      "tags": ["advocacy"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "standard.top_5_advocates_last_month",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5_advocates_last_month",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5 Advocates Last Month",
      "query": "advocacy_rank.last_month:\u003c=5 AND status:registered",
      "tags": ["advocacy", "monthly"],
      "total-users": 5,
      "order": []
    }
  }, {
    "id": "standard.top_5_advocates_last_quarter",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5_advocates_last_quarter",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5 Advocates Last Quarter",
      "query": "advocacy_rank.last_quarter:\u003c=5 AND status:registered",
      "tags": ["advocacy", "quarterly"],
      "total-users": 5,
      "order": []
    }
  }, {
    "id": "standard.top_5_advocates_last_week",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5_advocates_last_week",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5 Advocates Last Week",
      "query": "advocacy_rank.last_week:\u003c=5 AND status:registered",
      "tags": ["advocacy", "weekly"],
      "total-users": 5,
      "order": []
    }
  }, {
    "id": "standard.top_5_advocates_last_year",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5_advocates_last_year",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5 Advocates Last Year",
      "query": "advocacy_rank.last_year:\u003c=5 AND status:registered",
      "tags": ["advocacy", "yearly"],
      "total-users": 4,
      "order": []
    }
  }, {
    "id": "standard.top_5_advocates_this_month",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5_advocates_this_month",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5 Advocates This Month",
      "query": "advocacy_rank.this_month:\u003c=5 AND status:registered",
      "tags": ["advocacy", "monthly"],
      "total-users": 5,
      "order": []
    }
  }, {
    "id": "standard.top_5_advocates_this_quarter",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5_advocates_this_quarter",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5 Advocates This Quarter",
      "query": "advocacy_rank.this_quarter:\u003c=5 AND status:registered",
      "tags": ["advocacy", "quarterly"],
      "total-users": 5,
      "order": []
    }
  }, {
    "id": "standard.top_5_advocates_this_week",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5_advocates_this_week",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5 Advocates This Week",
      "query": "advocacy_rank.this_week:\u003c=5 AND status:registered",
      "tags": ["advocacy", "weekly"],
      "total-users": 5,
      "order": []
    }
  }, {
    "id": "standard.top_5_advocates_this_year",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5_advocates_this_year",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5 Advocates This Year",
      "query": "advocacy_rank.this_year:\u003c=5 AND status:registered",
      "tags": ["advocacy", "yearly"],
      "total-users": 5,
      "order": []
    }
  }, {
    "id": "standard.top_5p_advocates",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5p_advocates",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5% Advocates",
      "query": "advocacy_percentile.all_time:\u003c=5 AND status:registered",
      "tags": ["advocacy"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "standard.top_5p_advocates_last_month",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5p_advocates_last_month",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5% Advocates Last Month",
      "query": "advocacy_percentile.last_month:\u003e=95 AND status:registered",
      "tags": ["advocacy", "monthly"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "standard.top_5p_advocates_last_quarter",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5p_advocates_last_quarter",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5% Advocates Last Quarter",
      "query": "advocacy_percentile.last_quarter:\u003e=95 AND status:registered",
      "tags": ["advocacy", "quarterly"],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "standard.top_5p_advocates_last_week",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5p_advocates_last_week",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5% Advocates Last Week",
      "query": "advocacy_percentile.last_week:\u003e=95 AND status:registered",
      "tags": ["advocacy", "weekly"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "standard.top_5p_advocates_last_year",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5p_advocates_last_year",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5% Advocates Last Year",
      "query": "advocacy_percentile.last_year:\u003e=95 AND status:registered",
      "tags": ["advocacy", "yearly"],
      "total-users": 4,
      "order": []
    }
  }, {
    "id": "standard.top_5p_advocates_this_month",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5p_advocates_this_month",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5% Advocates This Month",
      "query": "advocacy_percentile.this_month:\u003e=95 AND status:registered",
      "tags": ["advocacy", "monthly"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "standard.top_5p_advocates_this_quarter",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5p_advocates_this_quarter",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5% Advocates This Quarter",
      "query": "advocacy_percentile.this_quarter:\u003e=95 AND status:registered",
      "tags": ["advocacy", "quarterly"],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "standard.top_5p_advocates_this_week",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5p_advocates_this_week",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5% Advocates This Week",
      "query": "advocacy_percentile.this_week:\u003e=95 AND status:registered",
      "tags": ["advocacy", "weekly"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "standard.top_5p_advocates_this_year",
    "type": "groups/standard",
    "attributes": {
      "name": "top_5p_advocates_this_year",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Top 5% Advocates This Year",
      "query": "advocacy_percentile.this_year:\u003e=95 AND status:registered",
      "tags": ["advocacy", "yearly"],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "standard.twitter_connected",
    "type": "groups/standard",
    "attributes": {
      "name": "twitter_connected",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Twitter Connected",
      "query": "twitter.status:connected AND status:registered",
      "tags": ["social", "twitter"],
      "total-users": 23,
      "order": []
    }
  }, {
    "id": "standard.twitter_disconnected",
    "type": "groups/standard",
    "attributes": {
      "name": "twitter_disconnected",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Twitter Disconnected",
      "query": "twitter.status:disconnected AND status:registered",
      "tags": ["social", "twitter"],
      "total-users": 166,
      "order": []
    }
  }, {
    "id": "standard.twitter_expired",
    "type": "groups/standard",
    "attributes": {
      "name": "twitter_expired",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Twitter Expired",
      "query": "twitter.status:expired AND status:registered",
      "tags": ["social", "twitter"],
      "total-users": 21,
      "order": []
    }
  }, {
    "id": "standard.verified_email",
    "type": "groups/standard",
    "attributes": {
      "name": "verified_email",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Verified Email",
      "query": "verified_email:true AND status:registered",
      "tags": ["connect", "email"],
      "total-users": 210,
      "order": []
    }
  }, {
    "id": "standard.web_only_users",
    "type": "groups/standard",
    "attributes": {
      "name": "web_only_users",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Web Only Users",
      "query": "platforms:web AND NOT platforms:ios AND NOT platforms:android AND status:registered",
      "tags": ["engagement", "web"],
      "total-users": 38,
      "order": []
    }
  }, {
    "id": "standard.web_users",
    "type": "groups/standard",
    "attributes": {
      "name": "web_users",
      "type": "standard",
      "state": "enabled",
      "program-id": 176,
      "title": "Web Users",
      "query": "platforms:web AND status:registered",
      "tags": ["engagement", "web"],
      "total-users": 160,
      "order": []
    }
  }, {
    "id": "generated.1_2_years_on_sc_tenure_question",
    "type": "groups/generated",
    "attributes": {
      "name": "1_2_years_on_sc_tenure_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "1-2 years (SC Tenure Question)",
      "query": "custom.sc_tenure:\"1-2 years\" AND status:registered",
      "tags": ["question", "sc-tenure"],
      "total-users": 21,
      "order": []
    }
  }, {
    "id": "generated.3_5_years_on_sc_tenure_question",
    "type": "groups/generated",
    "attributes": {
      "name": "3_5_years_on_sc_tenure_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "3-5 years (SC Tenure Question)",
      "query": "custom.sc_tenure:\"3-5 years\" AND status:registered",
      "tags": ["question", "sc-tenure"],
      "total-users": 4,
      "order": []
    }
  }, {
    "id": "generated.3_6_months_on_sc_tenure_question",
    "type": "groups/generated",
    "attributes": {
      "name": "3_6_months_on_sc_tenure_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "3-6 months (SC Tenure Question)",
      "query": "custom.sc_tenure:\"3-6 months\" AND status:registered",
      "tags": ["question", "sc-tenure"],
      "total-users": 9,
      "order": []
    }
  }, {
    "id": "generated.6_12_months_on_sc_tenure_question",
    "type": "groups/generated",
    "attributes": {
      "name": "6_12_months_on_sc_tenure_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "6-12 months (SC Tenure Question)",
      "query": "custom.sc_tenure:\"6-12 months\" AND status:registered",
      "tags": ["question", "sc-tenure"],
      "total-users": 10,
      "order": []
    }
  }, {
    "id": "generated.custom_country_united_states",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_country_united_states",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Country: United States",
      "query": "custom.country:\"us\" AND status:registered",
      "tags": ["country", "custom", "location"],
      "total-users": 6,
      "order": []
    }
  }, {
    "id": "generated.custom_department_cross_category",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_department_cross_category",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Department: cross category",
      "query": "custom.department:\"cross category\" AND status:registered",
      "tags": ["custom", "department"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.custom_department_customer_success",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_department_customer_success",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Department: customer success",
      "query": "custom.department:\"customer success\" AND status:registered",
      "tags": ["custom", "department"],
      "total-users": 25,
      "order": []
    }
  }, {
    "id": "generated.custom_department_enablement",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_department_enablement",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Department: enablement",
      "query": "custom.department:\"enablement\" AND status:registered",
      "tags": ["custom", "department"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.custom_department_engineering",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_department_engineering",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Department: engineering",
      "query": "custom.department:\"engineering\" AND status:registered",
      "tags": ["custom", "department"],
      "total-users": 59,
      "order": []
    }
  }, {
    "id": "generated.custom_department_finance_operations",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_department_finance_operations",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Department: finance/operations",
      "query": "custom.department:\"finance/operations\" AND status:registered",
      "tags": ["custom", "department"],
      "total-users": 12,
      "order": []
    }
  }, {
    "id": "generated.custom_department_marketing",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_department_marketing",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Department: marketing",
      "query": "custom.department:\"marketing\" AND status:registered",
      "tags": ["custom", "department"],
      "total-users": 9,
      "order": []
    }
  }, {
    "id": "generated.custom_department_null",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_department_null",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Department: null",
      "query": "custom.department:\"null\" AND status:registered",
      "tags": ["custom", "department"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.custom_department_product",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_department_product",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Department: product",
      "query": "custom.department:\"product\" AND status:registered",
      "tags": ["custom", "department"],
      "total-users": 11,
      "order": []
    }
  }, {
    "id": "generated.custom_department_sales_sales_dev",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_department_sales_sales_dev",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Department: sales/sales dev",
      "query": "custom.department:\"sales/sales dev\" AND status:registered",
      "tags": ["custom", "department"],
      "total-users": 35,
      "order": []
    }
  }, {
    "id": "generated.custom_department_solutions",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_department_solutions",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Department: solutions",
      "query": "custom.department:\"solutions\" AND status:registered",
      "tags": ["custom", "department"],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "generated.customer_success_on_department_question",
    "type": "groups/generated",
    "attributes": {
      "name": "customer_success_on_department_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Customer Success (Department Question)",
      "query": "custom.department:\"Customer Success\" AND status:registered",
      "tags": ["department", "question"],
      "total-users": 25,
      "order": []
    }
  }, {
    "id": "generated.custom_groups_acl_all_employees_no_contingents_no_mflc",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_groups_acl_all_employees_no_contingents_no_mflc",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "SAML Group: acl-all-employees-no contingents-no mflc",
      "query": "custom.groups:\"acl-all-employees-no contingents-no mflc\" AND status:registered",
      "tags": ["custom", "saml_group"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.custom_groups_att_emp",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_groups_att_emp",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "SAML Group: att_emp",
      "query": "custom.groups:\"att_emp\" AND status:registered",
      "tags": ["custom", "saml_group"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.custom_groups_att_mgr",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_groups_att_mgr",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "SAML Group: att_mgr",
      "query": "custom.groups:\"att_mgr\" AND status:registered",
      "tags": ["custom", "saml_group"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.custom_groups_brandcenter",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_groups_brandcenter",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "SAML Group: brandcenter",
      "query": "custom.groups:\"brandcenter\" AND status:registered",
      "tags": ["custom", "saml_group"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.custom_groups_hrusergroup",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_groups_hrusergroup",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "SAML Group: hrusergroup",
      "query": "custom.groups:\"hrusergroup\" AND status:registered",
      "tags": ["custom", "saml_group"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.custom_groups_powertrain",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_groups_powertrain",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "SAML Group: powertrain",
      "query": "custom.groups:\"powertrain\" AND status:registered",
      "tags": ["custom", "saml_group"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.custom_groups_us1y",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_groups_us1y",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "SAML Group: us1y",
      "query": "custom.groups:\"us1y\" AND status:registered",
      "tags": ["custom", "saml_group"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.custom_title_2",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_title_2",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Job Title: 2",
      "query": "custom.title:\"2\" AND status:registered",
      "tags": ["custom", "job_title"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.custom_title_analyst_brand_management",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_title_analyst_brand_management",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Job Title: analyst brand management",
      "query": "custom.title:\"analyst brand management\" AND status:registered",
      "tags": ["custom", "job_title"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.custom_title_senior_analyst_brand_management",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_title_senior_analyst_brand_management",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Job Title: senior analyst brand management",
      "query": "custom.title:\"senior analyst brand management\" AND status:registered",
      "tags": ["custom", "job_title"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.custom_title_senior_manager_communications_general",
    "type": "groups/generated",
    "attributes": {
      "name": "custom_title_senior_manager_communications_general",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Job Title: senior manager communications general",
      "query": "custom.title:\"senior manager communications general\" AND status:registered",
      "tags": ["custom", "job_title"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.engineering_on_department_question",
    "type": "groups/generated",
    "attributes": {
      "name": "engineering_on_department_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Engineering (Department Question)",
      "query": "custom.department:\"Engineering\" AND status:registered",
      "tags": ["department", "question"],
      "total-users": 59,
      "order": []
    }
  }, {
    "id": "generated.english_on_language_preference_question",
    "type": "groups/generated",
    "attributes": {
      "name": "english_on_language_preference_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "English (Language Preference Question)",
      "query": "custom.language_preference:\"English\" AND status:registered",
      "tags": ["language-preference", "question"],
      "total-users": 155,
      "order": []
    }
  }, {
    "id": "generated.finance_operations_on_department_question",
    "type": "groups/generated",
    "attributes": {
      "name": "finance_operations_on_department_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Finance/Operations (Department Question)",
      "query": "custom.department:\"Finance/Operations\" AND status:registered",
      "tags": ["department", "question"],
      "total-users": 12,
      "order": []
    }
  }, {
    "id": "generated.french_on_language_preference_question",
    "type": "groups/generated",
    "attributes": {
      "name": "french_on_language_preference_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "French (Language Preference Question)",
      "query": "custom.language_preference:\"French\" AND status:registered",
      "tags": ["language-preference", "question"],
      "total-users": 9,
      "order": []
    }
  }, {
    "id": "generated.italian_on_language_preference_question",
    "type": "groups/generated",
    "attributes": {
      "name": "italian_on_language_preference_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Italian (Language Preference Question)",
      "query": "custom.language_preference:\"Italian\" AND status:registered",
      "tags": ["language-preference", "question"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.mandarin_on_language_preference_question",
    "type": "groups/generated",
    "attributes": {
      "name": "mandarin_on_language_preference_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Mandarin (Language Preference Question)",
      "query": "custom.language_preference:\"Mandarin\" AND status:registered",
      "tags": ["language-preference", "question"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.marketing_on_department_question",
    "type": "groups/generated",
    "attributes": {
      "name": "marketing_on_department_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Marketing (Department Question)",
      "query": "custom.department:\"Marketing\" AND status:registered",
      "tags": ["department", "question"],
      "total-users": 9,
      "order": []
    }
  }, {
    "id": "generated.no_response_on_department_question",
    "type": "groups/generated",
    "attributes": {
      "name": "no_response_on_department_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "No Response (Department Question)",
      "query": "NOT custom.department:\"Customer Success\" AND NOT custom.department:\"Engineering\" AND NOT custom.department:\"Finance/Operations\" AND NOT custom.department:\"Product\" AND NOT custom.department:\"Marketing\" AND NOT custom.department:\"Sales/Sales Dev\" AND NOT custom.department:\"Solutions\" AND status:registered",
      "tags": ["no-response", "question"],
      "total-users": 56,
      "order": []
    }
  }, {
    "id": "generated.no_response_on_language_preference_question",
    "type": "groups/generated",
    "attributes": {
      "name": "no_response_on_language_preference_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "No Response (Language Preference Question)",
      "query": "NOT custom.language_preference:\"English\" AND NOT custom.language_preference:\"Spanish\" AND NOT custom.language_preference:\"French\" AND NOT custom.language_preference:\"Mandarin\" AND NOT custom.language_preference:\"Italian\" AND status:registered",
      "tags": ["no-response", "question"],
      "total-users": 42,
      "order": []
    }
  }, {
    "id": "generated.no_response_on_location_question",
    "type": "groups/generated",
    "attributes": {
      "name": "no_response_on_location_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "No Response (Location Question)",
      "query": "NOT custom.location:\"San Francisco\" AND NOT custom.location:\"Pasadena\" AND NOT custom.location:\"Portland\" AND NOT custom.location:\"Seattle\" AND NOT custom.location:\"Remote\" AND status:registered",
      "tags": ["no-response", "question"],
      "total-users": 37,
      "order": []
    }
  }, {
    "id": "generated.no_response_on_sc_tenure_question",
    "type": "groups/generated",
    "attributes": {
      "name": "no_response_on_sc_tenure_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "No Response (SC Tenure Question)",
      "query": "NOT custom.sc_tenure:\"Under 3 months\" AND NOT custom.sc_tenure:\"3-6 months\" AND NOT custom.sc_tenure:\"6-12 months\" AND NOT custom.sc_tenure:\"1-2 years\" AND NOT custom.sc_tenure:\"3-5 years\" AND NOT custom.sc_tenure:\"Over 5 years\" AND status:registered",
      "tags": ["no-response", "question"],
      "total-users": 83,
      "order": []
    }
  }, {
    "id": "generated.over_5_years_on_sc_tenure_question",
    "type": "groups/generated",
    "attributes": {
      "name": "over_5_years_on_sc_tenure_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Over 5 years (SC Tenure Question)",
      "query": "custom.sc_tenure:\"Over 5 years\" AND status:registered",
      "tags": ["question", "sc-tenure"],
      "total-users": 4,
      "order": []
    }
  }, {
    "id": "generated.pasadena_on_location_question",
    "type": "groups/generated",
    "attributes": {
      "name": "pasadena_on_location_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Pasadena (Location Question)",
      "query": "custom.location:\"Pasadena\" AND status:registered",
      "tags": ["location", "question"],
      "total-users": 6,
      "order": []
    }
  }, {
    "id": "generated.portland_on_location_question",
    "type": "groups/generated",
    "attributes": {
      "name": "portland_on_location_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Portland (Location Question)",
      "query": "custom.location:\"Portland\" AND status:registered",
      "tags": ["location", "question"],
      "total-users": 16,
      "order": []
    }
  }, {
    "id": "generated.product_on_department_question",
    "type": "groups/generated",
    "attributes": {
      "name": "product_on_department_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Product (Department Question)",
      "query": "custom.department:\"Product\" AND status:registered",
      "tags": ["department", "question"],
      "total-users": 11,
      "order": []
    }
  }, {
    "id": "generated.remote_on_location_question",
    "type": "groups/generated",
    "attributes": {
      "name": "remote_on_location_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Remote (Location Question)",
      "query": "custom.location:\"Remote\" AND status:registered",
      "tags": ["location", "question"],
      "total-users": 59,
      "order": []
    }
  }, {
    "id": "generated.sales_sales_dev_on_department_question",
    "type": "groups/generated",
    "attributes": {
      "name": "sales_sales_dev_on_department_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Sales/Sales Dev (Department Question)",
      "query": "custom.department:\"Sales/Sales Dev\" AND status:registered",
      "tags": ["department", "question"],
      "total-users": 35,
      "order": []
    }
  }, {
    "id": "generated.san_francisco_on_location_question",
    "type": "groups/generated",
    "attributes": {
      "name": "san_francisco_on_location_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "San Francisco (Location Question)",
      "query": "custom.location:\"San Francisco\" AND status:registered",
      "tags": ["location", "question"],
      "total-users": 90,
      "order": []
    }
  }, {
    "id": "generated.seattle_on_location_question",
    "type": "groups/generated",
    "attributes": {
      "name": "seattle_on_location_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Seattle (Location Question)",
      "query": "custom.location:\"Seattle\" AND status:registered",
      "tags": ["location", "question"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "generated.solutions_on_department_question",
    "type": "groups/generated",
    "attributes": {
      "name": "solutions_on_department_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Solutions (Department Question)",
      "query": "custom.department:\"Solutions\" AND status:registered",
      "tags": ["department", "question"],
      "total-users": 3,
      "order": []
    }
  }, {
    "id": "generated.spanish_on_language_preference_question",
    "type": "groups/generated",
    "attributes": {
      "name": "spanish_on_language_preference_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Spanish (Language Preference Question)",
      "query": "custom.language_preference:\"Spanish\" AND status:registered",
      "tags": ["language-preference", "question"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_2018_field_kick_off",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_2018_field_kick_off",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: 🚋 2018 Field Kick Off",
      "query": "channels.name:\"🚋 2018 Field Kick Off\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 31,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_artificial_intelligence",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_artificial_intelligence",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Dan's Test Channel",
      "query": "channels.name:\"Dan's Test Channel\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 5,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_asurion",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_asurion",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Asurion",
      "query": "channels.name:\"Asurion\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_breckenridge_eng_offsite",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_breckenridge_eng_offsite",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: 🏔️ Elevation 9600",
      "query": "channels.name:\"🏔️ Elevation 9600\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 27,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_ca_ching",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_ca_ching",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Ca-Ching",
      "query": "channels.name:\"Ca-Ching\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 102,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_company_team_updates",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_company_team_updates",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Company \u0026 Department Updates",
      "query": "channels.name:\"Company \u0026 Department Updates\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 112,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_compliance_communications",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_compliance_communications",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Compliance Communications",
      "query": "channels.name:\"Compliance Communications\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_cs_s_in_atx",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_cs_s_in_atx",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: 🎶 CS\u0026S in ATX",
      "query": "channels.name:\"🎶 CS\u0026S in ATX\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 14,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_customer_stories",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_customer_stories",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Customer Stories",
      "query": "channels.name:\"Customer Stories\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 83,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_darphin_product_line",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_darphin_product_line",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Darphin Product Line",
      "query": "channels.name:\"Darphin Product Line\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_demo_snaps",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_demo_snaps",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Demo Snaps",
      "query": "channels.name:\"Demo Snaps\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 25,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_employee_comms_advocacy",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_employee_comms_advocacy",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Employee Comms \u0026 Advocacy",
      "query": "channels.name:\"Employee Comms \u0026 Advocacy\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 76,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_futurecomms_2018",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_futurecomms_2018",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: FutureComms 2018",
      "query": "channels.name:\"FutureComms 2018\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 31,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_gillian_s_channel",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_gillian_s_channel",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Gillian's channel",
      "query": "channels.name:\"Gillian's channel\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_gillian_s_channel_2",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_gillian_s_channel_2",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Gillian's Channel 2",
      "query": "channels.name:\"Gillian's Channel 2\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_good_reads",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_good_reads",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Good Reads",
      "query": "channels.name:\"Good Reads\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 27,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_greg_live",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_greg_live",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Greg Live!",
      "query": "channels.name:\"Greg Live!\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 96,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_hack_your_career",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_hack_your_career",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Hack Your Career",
      "query": "channels.name:\"Hack Your Career\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 60,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_health_wellness",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_health_wellness",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Health \u0026 Wellness",
      "query": "channels.name:\"Health \u0026 Wellness\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 45,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_jennifer_test",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_jennifer_test",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Jennifer Test",
      "query": "channels.name:\"Jennifer Test\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_katelyn_test",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_katelyn_test",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Katelyn Test",
      "query": "channels.name:\"Katelyn Test\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_live_video",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_live_video",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Live Video",
      "query": "channels.name:\"Live Video\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 28,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_max_test",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_max_test",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Max Test",
      "query": "channels.name:\"Max Test\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_our_competition",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_our_competition",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Our Competition",
      "query": "channels.name:\"Our Competition\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 54,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_product_engineering",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_product_engineering",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Product \u0026 Engineering",
      "query": "channels.name:\"Product \u0026 Engineering\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 69,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_product_only",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_product_only",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Product Only",
      "query": "channels.name:\"Product Only\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 20,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_product_training",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_product_training",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Product Updates",
      "query": "channels.name:\"Product Updates\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 87,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_quotachorus",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_quotachorus",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: SCQuotaCrushers",
      "query": "channels.name:\"SCQuotaCrushers\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 20,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_sales_resources",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_sales_resources",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Sales Resources 🔐",
      "query": "channels.name:\"Sales Resources 🔐\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 50,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_sc_culture_operations",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_sc_culture_operations",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: SC Culture \u0026 Operations",
      "query": "channels.name:\"SC Culture \u0026 Operations\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 98,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_sc_directory",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_sc_directory",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: SC Directory",
      "query": "channels.name:\"SC Directory\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 32,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_sc_snaps",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_sc_snaps",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: SC Snaps",
      "query": "channels.name:\"SC Snaps\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 82,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_sc_travel_expense",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_sc_travel_expense",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: SC Travel \u0026 Expense",
      "query": "channels.name:\"SC Travel \u0026 Expense\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 24,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_seattle_test_channel",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_seattle_test_channel",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Seattle Test Channel",
      "query": "channels.name:\"Seattle Test Channel\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_share",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_share",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Share!",
      "query": "channels.name:\"Share!\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 62,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_socialchorus_san_francisco",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_socialchorus_san_francisco",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: SF HQ",
      "query": "channels.name:\"SF HQ\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 60,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_social_coders",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_social_coders",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Social Coders",
      "query": "channels.name:\"Social Coders\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 19,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_startup_madness",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_startup_madness",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Startup Madness",
      "query": "channels.name:\"Startup Madness\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 22,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_support_services",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_support_services",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Support Services",
      "query": "channels.name:\"Support Services\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 4,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_td",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_td",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: TD",
      "query": "channels.name:\"TD\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_the_business_of_saas",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_the_business_of_saas",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: The Business of SaaS",
      "query": "channels.name:\"The Business of SaaS\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 26,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_tweets_grams",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_tweets_grams",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Tweets \u0026 Grams",
      "query": "channels.name:\"Tweets \u0026 Grams\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 16,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_vlab_videos",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_vlab_videos",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: zz-VLAB Videos",
      "query": "channels.name:\"zz-VLAB Videos\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_we_business",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_we_business",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: We ♥ Business",
      "query": "channels.name:\"We ♥ Business\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 11,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_welcome_to_socialchorus",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_welcome_to_socialchorus",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Welcome to SocialChorus!",
      "query": "channels.name:\"Welcome to SocialChorus!\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 52,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_will_test",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_will_test",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: Will Test",
      "query": "channels.name:\"Will Test\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 2,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_world_of_customer_success",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_world_of_customer_success",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: World of Customer Success",
      "query": "channels.name:\"World of Customer Success\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 28,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_z_labs_2",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_z_labs_2",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: z Labs 2",
      "query": "channels.name:\"z Labs 2\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 7,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_z_labs_english",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_z_labs_english",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: z Labs - English",
      "query": "channels.name:\"z Labs - English\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_z_labs_french",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_z_labs_french",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: z Labs - French",
      "query": "channels.name:\"z Labs - French\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_z_labs_italian",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_z_labs_italian",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: z Labs - Italian",
      "query": "channels.name:\"z Labs - Italian\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_z_labs_myanmar",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_z_labs_myanmar",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: z Labs - Myanmar",
      "query": "channels.name:\"z Labs - Myanmar\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_z_labs_portugese",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_z_labs_portugese",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: z Labs - Portugese",
      "query": "channels.name:\"z Labs - Portugese\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 0,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_z_labs_spanish",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_z_labs_spanish",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: z Labs - Spanish",
      "query": "channels.name:\"z Labs - Spanish\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_zz_now",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_zz_now",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: zz Now",
      "query": "channels.name:\"zz Now\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 1,
      "order": []
    }
  }, {
    "id": "generated.subscribed_to_zzz_labs_for_testing",
    "type": "groups/generated",
    "attributes": {
      "name": "subscribed_to_zzz_labs_for_testing",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Subscribed to: zzz (Labs for testing)",
      "query": "channels.name:\"zzz (Labs for testing)\" AND status:registered",
      "tags": ["channels", "content"],
      "total-users": 7,
      "order": []
    }
  }, {
    "id": "generated.under_3_months_on_sc_tenure_question",
    "type": "groups/generated",
    "attributes": {
      "name": "under_3_months_on_sc_tenure_question",
      "type": "generated",
      "state": "enabled",
      "program-id": 176,
      "title": "Under 3 months (SC Tenure Question)",
      "query": "custom.sc_tenure:\"Under 3 months\" AND status:registered",
      "tags": ["question", "sc-tenure"],
      "total-users": 79,
      "order": []
    }
  }],
  "meta": {
    "total-objects": 446,
    "total-pages": 1,
    "page-number": 1,
    "page-size": 1000,
    "filters": {"state": "enabled", "type": "any"},
    "order": "default"
  }
}
