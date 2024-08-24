import {IssueList} from '../components/IssueList';
import {LabelPicker} from '../components/LabelPicker';
import {useIssues} from "../hooks";
import {LoadingSpinner} from "../../shared/components/LoadingSpinner.tsx";
import {useState} from "react";
import {State} from "../../interfaces";

export const ListView = () => {

    const [state, setState] = useState<State>( State.All);
    const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

    const { issuesQuery } = useIssues( { state, selectedLabels } );

    const issues = issuesQuery.data || [];

    const onSelectedLabels = (label: string) => {
        setSelectedLabels((prev) => {
            if (prev.includes(label)) {
                return prev.filter((l) => l !== label);
            }
            return [...prev, label];
        });
    }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
          {issuesQuery.isLoading
              ? <LoadingSpinner />
              : <IssueList issues={ issues } onStateChange={ setState } state={ state } />}
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker
            selectedLabels={selectedLabels}
            onSelectedLabels={onSelectedLabels}
        />
      </div>
    </div>
  );
};
