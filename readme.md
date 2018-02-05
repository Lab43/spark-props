s 00000000 00000000 ffffff ffffff ffffff ffffff 0000 ffffff ffffff ffffff ffffff

type
  - s to set colors directly
  - u to fade up from first color to second (ascending through hue value)
  - d to fade down from first color to second (descending through hue value)
  - p to trigger a preprogammed sequence, defined by first hex value

time
  - tells the prop the current time, based on the start time of the node app
  - must be 8 digits (enough for 24 hours of ms)

trigger at
  - timestamp to start event at, relative to start of node app
  - must be 8 digits (enough for 24 hours of ms)

first set of four hex values
  - if type is "s" lights will be set to these values directly
  - if type is "u" or "d" lights will fade from here to next set of hex values
  - if type is "p" the first 6-digit hex value is the id of a pre-programmed light sequence. Additional hex values will be ignored, but they must not be blank.

duration
  - if type is "u" or "p" this is the amount of time it takes to fade from the first set of hex values to the second set of hex values
  - for all other types this will be ignored, but it must not be blank.

second set of four hex values
  - if type is "u" or "p" this is the destination colors for the fade.
  - for all other types these values will be ignore, but they must not be blank
