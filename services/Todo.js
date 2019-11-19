/*
/users/{userid}/installations
List of the Object "installation"

installation-id
installation name
appcode (=installation type flow, nmp, dts, etc …)
external-id=UID IOT GW or Bridge
owner email
installer email
localisation-postal-code
localisation-city
localisation-country
Installation-date
Installation-heartbit
cloud-heartbit


/users/{userid}/installations/[installationId}/devices
list of the object "devices"

device-id
device-type
device-name
serial-number
reference-number
software-versions
installed-date
Last-installation-modification-date
installed-date-software-version
last-data-exchanged-date
current-error-status

[
  '{{repeat(4)}}',
  {
    id: '{{objectId()}}',
    name: '{{firstName()}}',
    type: '{{surname()}}',
    serial: '{{guid()}}',
    reference: '{{guid()}}',
    softwareVersion: '{{floating(1, 20, 2)}}',
    date: '{{date(new Date())}}',
    lastEdit: '{{date(new Date())}}',
    lastDataExchanged: '{{date(new Date())}}',
    status: '{{random("ok", "ko", "warn")}}'
  }
]

*/
