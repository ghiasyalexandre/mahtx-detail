import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
} from "react-aria-components";
import { getLocalTimeZone, today, now } from "@internationalized/date";

export default function MyDatePicker({ onDateChange }) {
  return (
    <DatePicker
      granularity="minute"
      className="group flex flex-col gap-2 w-full xl:w-[320px]"
      minValue={today(getLocalTimeZone())}
      defaultValue={now(getLocalTimeZone())}
      maxVisibleMonths={6}
      onChange={(date) => onDateChange(date)} // Pass selected date to parent
    >
      <Label className=" dark:text-white text-black cursor-default">
        Schedule for
      </Label>
      <Group className="flex rounded-lg invert-0 dark:invert bg-black border border-white focus-within:text-white group-open:bg-neutral-900 transition pl-3 shadow-md text-neutral-400 focus-visible:ring-2 ring-white">
        <DateInput className="flex flex-1 py-2">
          {(segment) => (
            <DateSegment
              segment={segment}
              className="px-[1px]  outline-none rounded-sm focus:bg-neutral-400 focus:text-white caret-transparent placeholder-shown:italic"
            />
          )}
        </DateInput>
        <Button className="outline-none px-3 flex items-center  text-neutral-200 transition  rounded-l-none  border-l border-l-white bg-transparent  pressed:bg-neutral-900 focus-visible:ring-2 ring-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="invert"
            height="18"
            viewBox="0 0 18 18"
            width="18"
          >
            <title>Calendar</title>
            <rect id="Canvas" fill="#fff" opacity="1" width="18" height="18" />
            <path d="M16.5,3H14V1.5a.5.5,0,0,0-.5-.5h-1a.5.5,0,0,0-.5.5V3H5V1.5A.5.5,0,0,0,4.5,1h-1a.5.5,0,0,0-.5.5V3H.5a.5.5,0,0,0-.5.5v13a.5.5,0,0,0,.5.5h16a.5.5,0,0,0,.5-.5V3.5A.5.5,0,0,0,16.5,3ZM16,16H1V4H3v.5a.5.5,0,0,0,.5.5h1A.5.5,0,0,0,5,4.5V4h7v.5a.5.5,0,0,0,.5.5h1a.5.5,0,0,0,.5-.5V4h2Z" />
            <rect height="2" width="2" x="3" y="6" />
            <rect height="2" width="2" x="6" y="6" />
            <rect height="2" width="2" x="9" y="6" />
            <rect height="2" width="2" x="12" y="6" />
            <rect height="2" width="2" x="3" y="9" />
            <rect height="2" width="2" x="6" y="9" />
            <rect height="2" width="2" x="9" y="9" />
            <rect height="2" width="2" x="12" y="9" />
            <rect height="2" width="2" x="3" y="12" />
            <rect height="2" width="2" x="6" y="12" />
            <rect height="2" width="2" x="9" y="12" />
            <rect height="2" width="2" x="12" y="12" />
          </svg>{" "}
        </Button>
      </Group>
      <MyPopover>
        <Dialog className="p-3 text-neutral-700 dark:bg-black border rounded-lg border-black dark:border-white">
          <Calendar className="dark:invert">
            <header className="flex items-center gap-1 pb-4 px-1  w-full">
              <Heading className="flex-1 font-semibold text-2xl ml-2" />
              <Button
                slot="previous"
                className="w-9 h-9 outline-none cursor-default font-bold bg-transparent text-neutral-700 border-0 rounded-full flex items-center justify-center hover:bg-neutral-200 pressed:bg-neutral-300 focus-visible:ring ring-neutral-600/70 ring-offset-2"
              >
                {"<"}
              </Button>
              <Button
                slot="next"
                className="w-9 h-9 outline-none cursor-default font-bold bg-transparent  text-neutral-700 border-0 rounded-full flex items-center justify-center hover:bg-neutral-200 pressed:bg-neutral-300 focus-visible:ring ring-neutral-600/70 ring-offset-2"
              >
                {">"}
              </Button>
            </header>
            <CalendarGrid className="border-spacing-1 border-separate">
              <CalendarGridHeader>
                {(day) => (
                  <CalendarHeaderCell className="text-xs text-neutral-500 font-semibold">
                    {day}
                  </CalendarHeaderCell>
                )}
              </CalendarGridHeader>
              <CalendarGridBody>
                {(date) => (
                  <CalendarCell
                    date={date}
                    className="w-9 h-9 outline-none cursor-default rounded-full flex items-center justify-center outside-month:text-neutral-300 hover:bg-neutral-200 pressed:bg-neutral-300 selected:bg-neutral-700 selected:text-white focus-visible:ring ring-neutral-600/70 ring-offset-2"
                  />
                )}
              </CalendarGridBody>
            </CalendarGrid>
          </Calendar>
        </Dialog>
      </MyPopover>
    </DatePicker>
  );
}

function MyPopover(props) {
  return (
    <Popover
      {...props}
      className={({ isEntering, isExiting }) => `
        overflow-auto rounded-lg drop-shadow-lg ring-1 ring-black/10 bg-white
        ${
          isEntering
            ? "animate-in fade-in placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 ease-out duration-200"
            : ""
        }
        ${
          isExiting
            ? "animate-out fade-out placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1 ease-in duration-150"
            : ""
        }
      `}
    />
  );
}
