import React from 'react';

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ width = 'w-full', height = 'h-4', className = '' }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${width} ${height} ${className}`}
      role="status"
      aria-label="Loading..."
    />
  );
};

export const SkeletonCard: React.FC = () => {
  return (
    <div className="border rounded-lg p-4 w-full">
      <Skeleton height="h-8" className="mb-4" />
      <Skeleton height="h-4" className="mb-2" />
      <Skeleton height="h-4" className="mb-2" width="w-3/4" />
      <div className="flex justify-between items-center mt-4">
        <Skeleton width="w-24" height="h-6" />
        <Skeleton width="w-16" height="h-6" />
      </div>
    </div>
  );
};

export default Skeleton;
