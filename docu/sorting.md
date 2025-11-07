# Sorting in Parts List

How does the sorting work?
there are two options for sorting:

- `recommend` (new way)
- `part_number` (old way)

## part_number

- filter (hide) all EOL parts
- meta field `material_number`

## recommend

the Sorting is done in a three way setup:
first the parts are filtered and sorted by the `status` meta filed.
the possible values are:

- active
- deprecated
- EOL

sorted via exactly this order.

each of these sub-segments is then sorted by the `difficulty` meta field:
the possible values are:

- recommend
- advanced
- expert
- fairy

and in the last step each of these sub-sections is sorted alphabetically.
