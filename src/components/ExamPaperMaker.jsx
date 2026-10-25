import React, { useState } from 'react';
import { 
  FileText, Plus, Trash2, Printer, Share2, CheckCircle2, 
  BookOpen, Sparkles, Download, Eye, Award, Clock
} from 'lucide-react';
import { CLASS_SUBJECT_OPTIONS } from './TeacherWorkspace';

export default function ExamPaperMaker({ 
  customData = {}, 
  studyMaterials = [], 
  setStudyMaterials, 
  saveToServer 
}) {
  const [examForm, setExamForm] = useState({
    title: 'মাধ্যমিক প্রাক-নির্বাচনী মূল্যায়ন ২০২৬ — বাংলা প্রথম পত্র',
    batch: 'Class 10',
    subject: 'মাধ্যমিক বাংলা সাহিত্য (জ্ঞানচক্ষু, বহুরূপী, সিরাজউদ্দৌলা)',
    timeAllowed: '১ ঘণ্টা ৩০ মিনিট',
    fullMarks: '৪০',
    instructions: 'সকল প্রশ্নের উত্তর দেওয়া আবশ্যক। সঠিক বিকল্পটি নির্বাচন করো এবং প্রতিটি দাগ নম্বরের উত্তর ক্রমানুসারে লেখো। ব্যাকরণ ও নির্মিতিতে নিজস্ব ভাষার প্রয়োগ প্রশংসনীয়।'
  });

  const [questions, setQuestions] = useState([
    {
      id: 1,
      section: 'বিভাগ — ক (বহুবিকল্পভিত্তিক প্রশ্ন / MCQ — সঠিক উত্তর নির্বাচন করো)',
      marksPerQuestion: 1,
      items: [
        '১.১ তপনের লেখা গল্পের নাম কী ছিল? (ক) প্রথম দিন (খ) স্কুলের দিন (গ) শেষ বেলা (ঘ) নতুন সূচনা',
        '১.২ ‘হরিদার উনানের আঁচে ফুটছে কেবল—’ (ক) ভাতের চাল (খ) এক হাঁড়ি জল (গ) খিচুড়ি (ঘ) চা পাতা',
        '১.৩ ‘অসুখী একজন’ কবিতার ভাষান্তর বা অনুবাদ করেছেন— (ক) শঙ্খ ঘোষ (খ) মানবেন্দ্র বন্দ্যোপাধ্যায় (গ) নবারুণ ভট্টাচার্য (ঘ) শক্তি চট্টোপাধ্যায়',
        '১.৪ ‘কলিকাতা কমলিকাতা’—এটি কোন জাতীয় শব্দের উদাহরণ? (ক) বর্ণবিপর্যয় (খ) সমীভবন (গ) অপিনিহিতি (ঘ) স্বরভক্তি'
      ]
    },
    {
      id: 2,
      section: 'বিভাগ — খ (কমবেশি ২০টি শব্দে অতিসংক্ষিপ্ত প্রশ্নের উত্তর দাও)',
      marksPerQuestion: 1,
      items: [
        '২.১ “জ্ঞানচক্ষু খুলে গেল তপনের”—কীভাবে তপনের প্রথম বাস্তব জ্ঞানচক্ষু উন্মীলিত হয়েছিল?',
        '২.২ “জগদীশবাবুর বাড়ি হরিদা বিরাগী সেজে গিয়েছিলেন কেন?”',
        '২.৩ সমাস শব্দের বুৎপত্তিগত অর্থ কী? একটি ব্যাসবাক্য সহ বহুব্রীহি সমাসের উদাহরণ দাও।',
        '২.৪ কর্তৃবাচ্য থেকে কর্মবাচ্যে রূপান্তরের প্রধান দুটি নিয়ম উল্লেখ করো।'
      ]
    },
    {
      id: 3,
      section: 'বিভাগ — গ (প্রসঙ্গ নির্দেশ সহ কমবেশি ৬০টি শব্দে ব্যাখ্যাভিত্তিক সংক্ষিপ্ত প্রশ্ন)',
      marksPerQuestion: 3,
      items: [
        '৩.১ “অমৃতের মতো সন্তান লাভ করে আমিও আনন্দিত”—বক্তা কে? অমৃতের কোন চারিত্রিক আচরণে বক্তা অভিভূত হয়েছিলেন?',
        '৩.২ “আমাদের পথ নেই কোনো”—কবির এমন গভীর বিষাদ ও সংশয়ের কারণ কী? বিপন্ন সময়ে তাঁর বার্তা কী?'
      ]
    },
    {
      id: 4,
      section: 'বিভাগ — ঘ (কমবেশি ১৫০ শব্দে রচনাধর্মী বা চরিত্র বিশ্লেষণাত্মক প্রশ্ন)',
      marksPerQuestion: 5,
      items: [
        '৪.১ “বাবুজি, এসব কথা বলার দুঃখ আছে”—বক্তা কে? কোন প্রসঙ্গে তাঁর এই উক্তি? বক্তার চরিত্রের অনন্য আত্মমর্যাদাবোধ আলোচনা করো।',
        '৪.২ “সিরাজউদ্দৌলা নাট্যাংশে দেশপ্রেমিক নবাব সিরাজের একাকীত্ব, অসহায়তা ও মানসিক দ্বন্দ্ব কীভাবে রূপায়িত হয়েছে আলোচনা করো।”',
        '৪.৩ “যাতনা যত বাড়বে, ক্ষমতা তত বাড়বে”—ক্ষিতীশ সিংহের এই অমর মন্ত্র কীভাবে কোনিকে চ্যাম্পিয়ন করে তুলেছিল?'
      ]
    },
    {
      id: 5,
      section: 'বিভাগ — ঙ (ব্যাকরণ ও নির্মিতি — প্রতিবেদন / প্রবন্ধ রচনা)',
      marksPerQuestion: 5,
      items: [
        '৫.১ আপনার এলাকায় অনুষ্ঠিত ‘মাতৃভাষা দিবস ও বাংলা সাহিত্য মেলা’ উপলক্ষে একটি সংক্ষিপ্ত প্রতিবেদন রচনা করো।',
        '৫.২ প্রবন্ধ রচনা করো (যে কোনো একটি): (ক) মাতৃভাষার মাধ্যমে শিক্ষাদান (খ) বাংলার ঋতুবৈচিত্র্য (গ) ছাত্রজীবনে নিয়মানুবর্তিতা।'
      ]
    }
  ]);

  const [newSectionTitle, setNewSectionTitle] = useState('');
  const [newSectionMarks, setNewSectionMarks] = useState('1');
  const [newItemText, setNewItemText] = useState('');
  const [selectedSectionId, setSelectedSectionId] = useState(1);
  const [publishSuccess, setPublishSuccess] = useState(false);
  const [showPrintPreview, setShowPrintPreview] = useState(false);

  const handleClassChange = (newBatch) => {
    const subs = CLASS_SUBJECT_OPTIONS[newBatch] || ['বাংলা সাহিত্যমেলা ও মাকু'];
    setExamForm(prev => ({
      ...prev,
      batch: newBatch,
      subject: subs[0]
    }));
  };

  const handleAddItemToSection = (sectionId) => {
    if (!newItemText.trim()) return;
    setQuestions(prev => prev.map(sec => {
      if (sec.id === sectionId) {
        return {
          ...sec,
          items: [...sec.items, newItemText.trim()]
        };
      }
      return sec;
    }));
    setNewItemText('');
  };

  const handleRemoveItem = (sectionId, itemIdx) => {
    setQuestions(prev => prev.map(sec => {
      if (sec.id === sectionId) {
        return {
          ...sec,
          items: sec.items.filter((_, idx) => idx !== itemIdx)
        };
      }
      return sec;
    }));
  };

  const handleAddSection = () => {
    if (!newSectionTitle.trim()) return;
    const newSec = {
      id: Date.now(),
      section: newSectionTitle.trim(),
      marksPerQuestion: Number(newSectionMarks) || 1,
      items: []
    };
    setQuestions(prev => [...prev, newSec]);
    setNewSectionTitle('');
  };

  const handleRemoveSection = (sectionId) => {
    setQuestions(prev => prev.filter(s => s.id !== sectionId));
  };

  // Publish directly to Student Portal as a downloadable / printable Mock Test
  const handlePublishToStudentPortal = () => {
    let fullPaperContent = `📝 ${examForm.title}\nশ্রেণী: ${examForm.batch} | বিষয়: ${examForm.subject}\nসময়: ${examForm.timeAllowed} | পূর্ণমান: ${examForm.fullMarks}\nনির্দেশিকা: ${examForm.instructions}\n\n`;

    questions.forEach((sec, sIdx) => {
      fullPaperContent += `\n📌 ${sec.section} (প্রতিটির মান: ${sec.marksPerQuestion})\n`;
      sec.items.forEach((item, iIdx) => {
        fullPaperContent += `${item}\n`;
      });
    });

    const newMaterial = {
      id: Date.now(),
      title: `[প্রশ্নপত্র] ${examForm.title} - ${examForm.subject}`,
      batch: examForm.batch,
      subject: examForm.subject,
      size: '১.৫ MB',
      type: 'Mock Test Paper',
      desc: fullPaperContent,
      date: new Date().toLocaleDateString('bn-BD', { day: 'numeric', month: 'long', year: 'numeric' })
    };

    const updated = [newMaterial, ...(studyMaterials || [])];
    if (setStudyMaterials) setStudyMaterials(updated);
    if (saveToServer) saveToServer({ studyMaterials: updated });
    try {
      localStorage.setItem('bg_study_materials', JSON.stringify(updated));
    } catch (e) {}

    setPublishSuccess(true);
    setTimeout(() => setPublishSuccess(false), 3500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Title & Stats */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-800 p-6 rounded-3xl text-white shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <FileText className="w-6 h-6 text-amber-300" />
            <h2 className="text-lg sm:text-xl font-black">
              📑 পরীক্ষার প্রশ্নপত্র ও মক টেস্ট মেকার (Exam Paper Generator)
            </h2>
          </div>
          <p className="text-xs text-indigo-100 mt-1 max-w-xl">
            শ্রেণী ও বিষয় নির্বাচন করে প্রাতিষ্ঠানিক স্ট্যান্ডার্ড প্রশ্নপত্র তৈরি করুন। সরাসরি প্রিন্ট করে ক্লাসে পরীক্ষা নিন অথবা এক ক্লিকে স্টুডেন্ট পোর্টালে মক টেস্ট হিসেবে প্রকাশ করুন।
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowPrintPreview(true)}
            className="px-4 py-2.5 bg-white text-indigo-900 rounded-2xl text-xs font-black flex items-center space-x-1.5 shadow-md active:scale-95 transition hover:bg-indigo-50"
          >
            <Printer className="w-4 h-4 text-indigo-700" />
            <span>প্রিন্ট ভিউ দেখুন</span>
          </button>

          <button
            type="button"
            onClick={handlePublishToStudentPortal}
            className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-2xl text-xs font-black flex items-center space-x-1.5 shadow-md active:scale-95 transition"
          >
            <Share2 className="w-4 h-4" />
            <span>পোর্টালে প্রকাশ করুন</span>
          </button>
        </div>
      </div>

      {publishSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-2xl font-bold text-xs flex items-center space-x-2 shadow-sm animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>✅ অভিনন্দন! এই প্রশ্নপত্রটি স্টুডেন্ট পোর্টালে সাফল্যের সাথে লাইভ প্রকাশ করা হয়েছে। সকল শিক্ষার্থী এটি দেখতে পারবে।</span>
        </div>
      )}

      {/* Exam Header Configuration Form */}
      <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="font-black text-slate-900 text-sm sm:text-base flex items-center space-x-2">
          <Award className="w-4 h-4 text-indigo-600" />
          <span>১. পরীক্ষার মৌলিক তথ্য ও নির্দেশিকা</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">পরীক্ষার নাম *</label>
            <input
              type="text"
              value={examForm.title}
              onChange={e => setExamForm({ ...examForm, title: e.target.value })}
              className="w-full p-2.5 border border-slate-200 rounded-xl bg-slate-50 font-bold"
              placeholder="যেমন: ১ম পর্যায়ক্রমিক মূল্যায়ন ২০২৬"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">শ্রেণী নির্বাচন *</label>
            <select
              value={examForm.batch}
              onChange={e => handleClassChange(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-xl bg-slate-50 font-bold"
            >
              <option value="Class 7">Class 7 (সপ্তম শ্রেণী)</option>
              <option value="Class 8">Class 8 (অষ্টম শ্রেণী)</option>
              <option value="Class 9">Class 9 (নবম শ্রেণী)</option>
              <option value="Class 10">Class 10 (মাধ্যমিক দশম)</option>
              <option value="Class 11">Class 11 (একাদশ শ্রেণী - WBCHSE)</option>
              <option value="Class 12">Class 12 (দ্বাদশ শ্রেণী - WBCHSE)</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">বিষয় (Auto-Mapped) *</label>
            <select
              value={examForm.subject}
              onChange={e => setExamForm({ ...examForm, subject: e.target.value })}
              className="w-full p-2.5 border border-slate-200 rounded-xl bg-slate-50 font-bold text-indigo-900"
            >
              {(CLASS_SUBJECT_OPTIONS[examForm.batch] || ['বাংলা সাহিত্যমেলা ও মাকু']).map(sub => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
              <option value="অন্যান্য বিষয়">অন্যান্য বিষয়</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">সময়সীমা</label>
            <input
              type="text"
              value={examForm.timeAllowed}
              onChange={e => setExamForm({ ...examForm, timeAllowed: e.target.value })}
              className="w-full p-2.5 border border-slate-200 rounded-xl bg-slate-50 font-bold"
              placeholder="যেমন: ১ ঘণ্টা ৩০ মিনিট / ২ ঘণ্টা"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">পূর্ণমান (Full Marks)</label>
            <input
              type="text"
              value={examForm.fullMarks}
              onChange={e => setExamForm({ ...examForm, fullMarks: e.target.value })}
              className="w-full p-2.5 border border-slate-200 rounded-xl bg-slate-50 font-bold"
              placeholder="যেমন: ২৫, ৪০, ৫০, ৯০"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">পরীক্ষার কেন্দ্র / কোচিং নাম</label>
            <input
              type="text"
              readOnly
              value={customData.centerName || 'B.G. TUTORIAL HOME (দক্ষিণ হাবড়া)'}
              className="w-full p-2.5 border border-slate-200 rounded-xl bg-slate-100 font-bold text-slate-600"
            />
          </div>

          <div className="sm:col-span-3">
            <label className="block font-bold text-slate-700 mb-1">পরীক্ষার্থীদের জন্য সাধারণ নির্দেশিকা</label>
            <input
              type="text"
              value={examForm.instructions}
              onChange={e => setExamForm({ ...examForm, instructions: e.target.value })}
              className="w-full p-2.5 border border-slate-200 rounded-xl bg-slate-50 font-sans"
              placeholder="পরীক্ষার্থীদের করণীয়..."
            />
          </div>
        </div>
      </div>

      {/* Question Sections Builder */}
      <div className="bg-white p-5 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <div>
            <h3 className="font-black text-slate-900 text-sm sm:text-base flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>২. প্রশ্নপত্র বিভাগ ও প্রশ্ন যোগ করুন ({questions.reduce((acc, q) => acc + q.items.length, 0)} টি প্রশ্ন)</span>
            </h3>
            <p className="text-xs text-slate-500">
              নিচের বিভাগগুলিতে নতুন প্রশ্ন যোগ করতে পারেন অথবা নতুন বিভাগ যুক্ত করতে পারেন।
            </p>
          </div>
        </div>

        {/* Sections and items display */}
        <div className="space-y-4">
          {questions.map((sec, secIdx) => (
            <div key={sec.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-800 rounded font-black text-xs">
                    বিভাগ {secIdx + 1}
                  </span>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">{sec.section}</span>
                  <span className="text-[11px] font-bold text-slate-500">[মান: প্রতি প্রশ্ন {sec.marksPerQuestion}]</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveSection(sec.id)}
                  className="text-rose-500 hover:text-rose-700 text-xs font-bold flex items-center space-x-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">বিভাগ মুছুন</span>
                </button>
              </div>

              {/* Items in section */}
              <div className="space-y-2">
                {sec.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex justify-between items-start gap-2 bg-white p-2.5 rounded-xl border border-slate-200 text-xs">
                    <span className="font-sans text-slate-800 leading-relaxed">{item}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(sec.id, itemIdx)}
                      className="text-slate-400 hover:text-rose-600 p-1 shrink-0"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}

                {sec.items.length === 0 && (
                  <p className="text-xs text-slate-400 italic">এই বিভাগে এখনো কোনো প্রশ্ন যোগ করা হয়নি।</p>
                )}
              </div>

              {/* Add item to this section */}
              <div className="flex gap-2 pt-1">
                <input
                  type="text"
                  placeholder={`বিভাগটিতে নতুন প্রশ্ন লিখুন...`}
                  value={selectedSectionId === sec.id ? newItemText : ''}
                  onFocus={() => setSelectedSectionId(sec.id)}
                  onChange={e => {
                    setSelectedSectionId(sec.id);
                    setNewItemText(e.target.value);
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddItemToSection(sec.id);
                    }
                  }}
                  className="flex-1 p-2 border border-slate-200 rounded-xl bg-white text-xs font-sans"
                />
                <button
                  type="button"
                  onClick={() => handleAddItemToSection(sec.id)}
                  className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1 shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>যোগ করুন</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Section */}
        <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100 space-y-2 text-xs">
          <span className="font-black text-indigo-900 block">➕ নতুন প্রশ্ন বিভাগ যুক্ত করুন</span>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
            <input
              type="text"
              placeholder="বিভাগের নাম (যেমন: বিভাগ — ঙ (বিকল্পভিত্তিক প্রশ্ন))"
              value={newSectionTitle}
              onChange={e => setNewSectionTitle(e.target.value)}
              className="sm:col-span-2 p-2.5 border border-slate-200 rounded-xl bg-white font-bold"
            />
            <input
              type="number"
              placeholder="প্রতি প্রশ্নের মান (যেমন: ১, ২, ৫)"
              value={newSectionMarks}
              onChange={e => setNewSectionMarks(e.target.value)}
              className="p-2.5 border border-slate-200 rounded-xl bg-white font-bold"
            />
            <button
              type="button"
              onClick={handleAddSection}
              className="py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl flex items-center justify-center space-x-1"
            >
              <Plus className="w-4 h-4" />
              <span>বিভাগ যুক্ত করুন</span>
            </button>
          </div>
        </div>
      </div>

      {/* PRINT PREVIEW MODAL */}
      {showPrintPreview && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3 overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl p-6 sm:p-10 space-y-6 my-8 max-h-[90vh] overflow-y-auto font-sans print:m-0 print:p-0 print:shadow-none">
            
            {/* Modal Actions Bar (Hidden during print) */}
            <div className="flex justify-between items-center border-b border-slate-200 pb-3 print:hidden">
              <span className="font-black text-slate-800 text-sm">🖨️ প্রশ্নপত্র প্রিন্ট ও প্রিভিউ</span>
              <div className="flex gap-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs flex items-center space-x-1.5 shadow"
                >
                  <Printer className="w-4 h-4" />
                  <span>এখনই প্রিন্ট করুন</span>
                </button>
                <button
                  onClick={() => setShowPrintPreview(false)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl font-bold text-xs"
                >
                  বন্ধ করুন
                </button>
              </div>
            </div>

            {/* Official West Bengal School Standard Question Paper Header */}
            <div className="text-center border-b-2 border-slate-900 pb-4 space-y-1">
              <h1 className="text-xl sm:text-2xl font-black tracking-wide text-slate-950 uppercase">
                {customData.centerName || 'B.G. TUTORIAL HOME'}
              </h1>
              <p className="text-xs font-bold text-slate-700">
                দক্ষিণ হাবড়া, উত্তর ২৪ পরগণা • শিক্ষক: {customData.teacherName || 'বাবুন ঘোষ'}
              </p>
              <h2 className="text-base sm:text-lg font-black text-slate-900 mt-2">
                {examForm.title}
              </h2>
              <div className="flex justify-between items-center text-xs font-bold pt-2 border-t border-slate-300 mt-2 text-slate-800">
                <span>শ্রেণী: {examForm.batch}</span>
                <span>বিষয়: {examForm.subject}</span>
                <span>সময়: {examForm.timeAllowed}</span>
                <span>পূর্ণমান: {examForm.fullMarks}</span>
              </div>
            </div>

            {/* Student Name & Roll line */}
            <div className="flex justify-between text-xs font-bold border-b border-dashed border-slate-300 pb-2 text-slate-700">
              <span>শিক্ষার্থীর নাম: _____________________________________</span>
              <span>রোল নং: ___________</span>
              <span>তারিখ: ___________</span>
            </div>

            {/* General Instructions */}
            <div className="text-[11px] italic text-slate-600 bg-slate-50 p-2 rounded border border-slate-200">
              <strong>বিশেষ নির্দেশিকা:</strong> {examForm.instructions}
            </div>

            {/* Question Sections */}
            <div className="space-y-6 pt-2">
              {questions.map((sec, secIdx) => (
                <div key={sec.id} className="space-y-2">
                  <div className="flex justify-between items-center font-black text-xs sm:text-sm border-b border-slate-400 pb-1 text-slate-950">
                    <span>{sec.section}</span>
                    <span>[{sec.items.length} × {sec.marksPerQuestion} = {sec.items.length * sec.marksPerQuestion}]</span>
                  </div>
                  <div className="space-y-2 pl-2">
                    {sec.items.map((item, idx) => (
                      <p key={idx} className="text-xs text-slate-900 leading-relaxed font-sans">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* End of Question Paper Footer */}
            <div className="text-center pt-8 border-t border-slate-300 text-xs font-bold text-slate-500">
              *** পরীক্ষা সমাপ্ত — শুভকামনা রইল ***
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
