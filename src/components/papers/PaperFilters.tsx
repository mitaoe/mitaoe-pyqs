import type { FilterOption } from '@/utils/search';

interface PaperFiltersProps {
  years: FilterOption[];
  branches: FilterOption[];
  semesters: FilterOption[];
  examTypes: FilterOption[];
  selectedYear: string;
  selectedBranch: string;
  selectedSemester: string;
  selectedExamType: string;
  onYearChange: (year: string) => void;
  onBranchChange: (branch: string) => void;
  onSemesterChange: (semester: string) => void;
  onExamTypeChange: (examType: string) => void;
}

export default function PaperFilters({
  years,
  branches,
  semesters,
  examTypes,
  selectedYear,
  selectedBranch,
  selectedSemester,
  selectedExamType,
  onYearChange,
  onBranchChange,
  onSemesterChange,
  onExamTypeChange,
}: PaperFiltersProps) {
  return (
    <div className="space-y-4 rounded-lg border bg-white p-4">
      <h3 className="font-medium text-gray-900">Filters</h3>
      
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium text-gray-700">Year</label>
          <select
            value={selectedYear}
            onChange={(e) => onYearChange(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
          >
            <option value="">All Years</option>
            {years.map((year) => (
              <option key={year.value} value={year.value}>
                {year.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Branch</label>
          <select
            value={selectedBranch}
            onChange={(e) => onBranchChange(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
          >
            <option value="">All Branches</option>
            {branches.map((branch) => (
              <option key={branch.value} value={branch.value}>
                {branch.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Semester</label>
          <select
            value={selectedSemester}
            onChange={(e) => onSemesterChange(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
          >
            <option value="">All Semesters</option>
            {semesters.map((semester) => (
              <option key={semester.value} value={semester.value}>
                {semester.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Exam Type</label>
          <select
            value={selectedExamType}
            onChange={(e) => onExamTypeChange(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
          >
            <option value="">All Exam Types</option>
            {examTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
} 