import { MdOutlineDashboard } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { GrSchedule } from "react-icons/gr";
import { MdOutlineFolder } from "react-icons/md";
import { RiSchoolLine } from "react-icons/ri";

export const navigationData = [
  {
    title: "Tableau de bord",
    icon: <MdOutlineDashboard />,
  },
  {
    title: "Paie",
    icon: <MdAccountBalance />,
  },
  {
    title: "Accompte",
    icon: <MdOutlineSpeakerNotes />,
  },
  {
    title: "Absences",
    icon: <GrSchedule />,
  },
  {
    title: "Notes de frais",
    icon: <GrNotes />,
  },
  {
    title: "Mes documents",
    icon: <MdOutlineFolder />,
  },
  {
    title: "Etablissements",
    icon: <RiSchoolLine />,
  },
];
