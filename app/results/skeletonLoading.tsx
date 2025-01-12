import { Skeleton } from "@/components/ui/skeleton";

const SkeletonDisplay = () => {
	return (
		<div className="w-full">
			<div className="flex flex-col items-start space-y-4 mb-2">
				<Skeleton className="bg-slate-400 h-[350px] w-full rounded-lg" />
                <Skeleton className="bg-slate-400 h-6 w-[350px]  rounded-lg" />
                <Skeleton className="bg-slate-400 h-6 w-[150px]  rounded-lg" />
				<div className="flex space-x-4">
					<Skeleton className="bg-slate-400 h-12 w-1/4 rounded-lg" />
					<Skeleton className="bg-slate-400 h-12 w-1/4 rounded-lg" />
				</div>
			</div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2 mb-8">
				{Array.from({ length: 4 }).map((_, index) => (
					<div key={index} className="flex flex-col items-stretch gap-2 space-y-3">
						<Skeleton className="bg-slate-400 h-[200px] w-full rounded-xl" />

					</div>
				))}
			</div>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4 mb-4">
				{Array.from({ length: 6 }).map((_, index) => (
					<div key={index} className="flex flex-col items-stretch space-y-3">
						<Skeleton className="bg-slate-400 h-[200px] w-full rounded-xl" />

					</div>
				))}
			</div>
		</div>
	);
};

export default SkeletonDisplay;
