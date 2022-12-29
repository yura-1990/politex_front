import {
  HistoryUniversity,
  RectorsCongratulation,
  RectorsVirtualReception,
  RegulatoryDocuments,
  Requisites,
  UniversityCharter,
} from "@/pages/univercity";

export const routes = [
  {
    element: <RectorsCongratulation />,
    path: "/university/rectors-congratulation",
  },
  {
    element: <Requisites />,
    path: "/university/requisites",
  },
  {
    element: <UniversityCharter />,
    path: "/university/regulations-university",
  },
  {
    element: <RectorsVirtualReception />,
    path: "/university/rector-virtual-reception",
  },
  {
    element: <RegulatoryDocuments />,
    path: "/university/regulatory-documents",
  },
  {
    element: <HistoryUniversity />,
    path: "/university/history-university",
  },
];
