import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { ExpandableSection } from './ExpandableSection';
import { SkillTag } from './SkillTag';

const skills = [
  'Team Management',
  'Revenue Growth',
  'Client Relations',
  'Strategic Planning',
  'Sales Operations',
  'Market Analysis'
];

export default function ProfileCard() {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="flex flex-col items-center space-y-3">
        <div className="relative w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-black dark:text-white">Matúš Staňo</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">Sales Manager & Tech Enthusiast</p>
        
        <button className="inline-flex items-center px-4 py-2 text-sm border border-transparent font-medium rounded-md text-white bg-black hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
          Download CV
        </button>
      </div>

      <div className="mt-8 space-y-2">
        <ExpandableSection title="Sales Leadership">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            Leading sales teams and driving revenue growth through strategic planning.
          </p>
          <div className="flex flex-wrap gap-1">
            {skills.map((skill) => (
              <SkillTag key={skill}>{skill}</SkillTag>
            ))}
          </div>
        </ExpandableSection>

        <ExpandableSection title="Technical Skills">
          <div className="space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Technical tools and platforms expertise.
            </p>
            <div className="flex flex-wrap gap-1">
              {['CRM Systems', 'Sales Analytics', 'Data Visualization', 'Process Automation', 'Digital Marketing'].map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </div>
          </div>
        </ExpandableSection>

        <ExpandableSection title="Personal Achievements">
          <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-300 list-disc list-inside">
            <li>150% annual sales targets achievement</li>
            <li>30% efficiency increase with new CRM</li>
            <li>Successful market expansion strategy</li>
            <li>Top Sales Manager of the Year 2022</li>
          </ul>
        </ExpandableSection>
      </div>
    </div>
  );
}