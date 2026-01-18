import { CreateButton } from "@/components/refine-ui/buttons/create";
import { DataTable } from "@/components/refine-ui/data-table/data-table";
import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb";
import { ListView } from "@/components/refine-ui/views/list-view";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEPARTMENT_OPTIONS } from "@/constants";
import { Subject } from "@/types";
import { useTable } from "@refinedev/react-table";
import { ColumnDef } from "@tanstack/react-table";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const SubjectList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const departmentFilter =
    filter === "all"
      ? []
      : [
          {
            field: "department",
            operator: "eq" as const,
            value: filter,
          },
        ];

  const searchFilter = searchTerm
    ? [{ field: "name", operator: "contains" as const, value: searchTerm }]
    : [];
  const subjectTable = useTable<Subject>({
    columns: useMemo<ColumnDef<Subject>[]>(
      () => [
        {
          id: "code",
          accessorKey: "code",
          size: 100,
          header: () => <p className="column-title ml-2">Code</p>,
          cell: ({ getValue }) => (
            <Badge className="ml-2">{getValue<string>()}</Badge>
          ),
        },
        {
          id: "name",
          accessorKey: "name",
          header: () => <p className="column-title">Name</p>,
          cell: ({ getValue }) => <span>{getValue<string>()}</span>,
          filterFn: "includesString",
        },
        {
          id: "department",
          accessorKey: "department",
          size: 150,
          header: () => <p className="column-title">Department</p>,
          cell: ({ getValue }) => (
            <Badge variant="secondary">{getValue<string>()}</Badge>
          ),
        },
        {
          id: "description",
          accessorKey: "description",
          size: 150,
          header: () => <p className="column-title">Description</p>,
          cell: ({ getValue }) => (
            <span className="truncate line-clamp-2">{getValue<string>()}</span>
          ),
        },
      ],
      [],
    ),
    refineCoreProps: {
      resource: "subjects",
      pagination: {
        pageSize: 10,
        mode: "server",
      },

      filters: {
        permanent: [...departmentFilter, ...searchFilter],
      },
      sorters: {
        initial: [{ field: "id", order: "desc" as const }],
      },
    },
  });
  return (
    <ListView>
      <Breadcrumb />
      <h1 className="page-title">Subjects</h1>

      <div className="intro-row">
        <p>Quick access to essential metrics and menagement tools.</p>

        <div className="actions-row">
          <div className="search-field">
            <Search className="search-icon" />
            <Input
              type="text"
              placeholder="Search by name..."
              className="w-full pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by department" />

                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {DEPARTMENT_OPTIONS.map((dept) => (
                    <SelectItem key={dept.value} value={dept.value}>
                      {dept.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </SelectTrigger>
            </Select>
            <CreateButton />
          </div>
        </div>
      </div>
      <DataTable table={subjectTable} />
    </ListView>
  );
};

export default SubjectList;
