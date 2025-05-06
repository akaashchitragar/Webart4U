'use client';

import { useEffect, useRef } from 'react';
import { userEngagement } from '@/lib/analytics';

interface AnalyticsTrackerProps {
  children: React.ReactNode;
}

/**
 * Component for tracking user engagement metrics
 */
export default function AnalyticsTracker({ children }: AnalyticsTrackerProps) {
  const scrollTracked = useRef<{ [key: number]: boolean }>({});

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      // Track scroll depth at 25%, 50%, 75%, and 100%
      const milestones = [25, 50, 75, 100];
      
      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !scrollTracked.current[milestone]) {
          scrollTracked.current[milestone] = true;
          userEngagement.scrollDepth(milestone);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track outbound links
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href && link.host !== window.location.host) {
        userEngagement.outboundLink(link.href, link.textContent || link.href);
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  // Track file downloads
  useEffect(() => {
    const handleDownloadClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href) {
        const fileExtensions = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'zip', 'rar'];
        const href = link.href.toLowerCase();
        
        fileExtensions.forEach((ext) => {
          if (href.endsWith(`.${ext}`)) {
            const fileName = href.split('/').pop() || href;
            userEngagement.fileDownload(fileName.split('.')[0], ext);
          }
        });
      }
    };

    document.addEventListener('click', handleDownloadClick);
    return () => document.removeEventListener('click', handleDownloadClick);
  }, []);

  // Track form submissions
  useEffect(() => {
    const handleFormSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      
      if (form && form.id) {
        userEngagement.formSubmit(form.id, form.getAttribute('name') || form.id);
      }
    };

    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      form.addEventListener('submit', handleFormSubmit as EventListener);
    });
    
    return () => {
      forms.forEach((form) => {
        form.removeEventListener('submit', handleFormSubmit as EventListener);
      });
    };
  }, []);

  return <>{children}</>;
} 