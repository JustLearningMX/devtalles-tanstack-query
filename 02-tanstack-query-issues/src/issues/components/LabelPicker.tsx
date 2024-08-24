import {useLabels} from "../hooks/useLabels.tsx";
import {LoadingSpinner} from "../../shared/components/LoadingSpinner.tsx";
import {FC} from "react";

interface Props {
    selectedLabels: string[];
    onSelectedLabels: (label: string) => void;
}

export const LabelPicker: FC<Props> = ({ selectedLabels, onSelectedLabels }) => {

    const { labelsQuery } = useLabels();

    if(labelsQuery.isLoading) {
        return (
            <div className="flex justify-center items-center h-52">
                <LoadingSpinner />
            </div>
        );
    }

    return (
    <div className="flex flex-wrap gap-2 justify-center">
        {
            labelsQuery.data?.map((label) => (
                <span
                    key={label.id}
                    onClick={() => onSelectedLabels(label.name)}
                    className={`
                        px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer
                        ${selectedLabels.includes(label.name) ? 'selected-label' : ''}
                    `}
                    style={{border: `1px solid #${label.color}`, color: `#fff`}}
                >
                    {label.name}
                </span>
            ))
        }
    </div>
    );
};
