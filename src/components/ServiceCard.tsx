import React from 'react'

function ServiceCard({
  icon,
  title,
  desc,
  tags,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tags?: string[];
}) {
  return (
    <div>
         <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4">{icon}</div>

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

      <p className="mt-2 text-sm leading-relaxed text-gray-500">
        {desc}
      </p>

      {tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-[10px] font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
    </div>
  )
}

export default ServiceCard