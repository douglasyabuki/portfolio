import * as React from 'react';

export interface IContactProps {
}

export default function Contact (props: IContactProps) {
  return (
    <div className="w-auto h-auto py-16 px-4 sm:px-7 md:px-8 lg:px-10 bg-slate-100">
      <div className="px-4 sm:px-7 md:px-8 lg:px-10 rounded-xl bg-red-700">
        Contact works
      </div>
    </div>
  );
}
