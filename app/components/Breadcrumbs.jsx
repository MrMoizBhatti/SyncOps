"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';
import { generateBreadcrumbs } from '../utils/seoUtils';

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Generate breadcrumb items from pathname
  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    ...pathSegments.map((segment, index) => {
      const url = '/' + pathSegments.slice(0, index + 1).join('/');
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return { name, url };
    }),
  ];

  // Add breadcrumb structured data
  useEffect(() => {
    const breadcrumbSchema = generateBreadcrumbs(breadcrumbItems);
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbSchema);
    script.id = 'breadcrumb-structured-data';
    
    // Remove existing breadcrumb schema if any
    const existing = document.getElementById('breadcrumb-structured-data');
    if (existing) existing.remove();
    
    document.head.appendChild(script);
    
    return () => {
      const scriptToRemove = document.getElementById('breadcrumb-structured-data');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [pathname]);

  // Don't show breadcrumbs on homepage
  if (pathname === '/') return null;

  return (
    <nav 
      className="bg-white/5 backdrop-blur-sm border-b border-white/10 py-3 px-6"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center space-x-2 text-sm text-gray-300 max-w-7xl mx-auto">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          
          return (
            <li key={item.url} className="flex items-center">
              {index === 0 ? (
                <Link
                  href={item.url}
                  className="hover:text-brand-aqua transition-colors"
                  aria-label="Home"
                >
                  <Home className="w-4 h-4" />
                </Link>
              ) : (
                <>
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                  {isLast ? (
                    <span className="text-white font-medium" aria-current="page">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.url}
                      className="hover:text-brand-aqua transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

