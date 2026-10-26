/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SnowEffect } from './components/SnowEffect';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Learning } from './components/Learning';
import { Activities } from './components/Activities';
import { TimetableEvents } from './components/TimetableEvents';
import { Announcements } from './components/Announcements';
import { SchoolAI } from './components/SchoolAI';
import { Contact } from './components/Contact';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { Footer } from './components/Footer';

export default function App() {
  const [snowEnabled, setSnowEnabled] = useState(true);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c2419] text-slate-100 flex flex-col relative selection:bg-red-700 selection:text-white">
      {/* Falling snow particle effect with toggle */}
      <SnowEffect enabled={snowEnabled} />

      {/* Navigation bar following 3-zone contract */}
      <Navbar
        snowEnabled={snowEnabled}
        onToggleSnow={() => setSnowEnabled((prev) => !prev)}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenAiGuide={() => scrollToSection('ai-assistant')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Home / Hero */}
        <Hero
          onExploreLearning={() => scrollToSection('learning')}
          onOpenAiGuide={() => scrollToSection('ai-assistant')}
        />

        {/* Section 2: About Us */}
        <AboutUs />

        {/* Section 3: Learning */}
        <Learning />

        {/* Section 4: Activities & Games */}
        <Activities />

        {/* Section 5: Timetable & Events */}
        <TimetableEvents />

        {/* Section 6: Announcements */}
        <Announcements />

        {/* Section 7: Christmas School AI */}
        <SchoolAI />

        {/* Section 8: Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
        onOpenAiGuide={() => scrollToSection('ai-assistant')}
      />

      {/* Section 9: Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
