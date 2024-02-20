"use client";

import React from "react";
import { useRandomQuotesQuery } from "../../hook";

const QuotesSection = () => {
  const { data, isLoading } = useRandomQuotesQuery();
  return (
    <div className="relative z-20 mt-auto">
      <blockquote className="space-y-2">
        {isLoading ? (
          <p className="h-4 w-full animate-pulse rounded-sm bg-gray-300"></p>
        ) : (
          <p className="text-lg">&ldquo;{data?.content}&rdquo;</p>
        )}
        <footer className="text-sm">{isLoading ? "..." : data?.author}</footer>
      </blockquote>
    </div>
  );
};

export default QuotesSection;
