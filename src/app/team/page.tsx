// src/pages/team.tsx
'use client'
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, ChevronDown, X } from "lucide-react";
import { executiveTeam, teamSections as initialTeamSections, TeamSection } from "../team/memberdetails"; // Adjust path if needed
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

// ===== Types =====
export interface SocialLinksType {
  instagram?: string;
  linkedin?: string;
  github?: string;
}

export interface TeamMemberType {
  name: string;
  title: string;
  imageUrl: string;
  socials?: SocialLinksType;
}

export interface TeamSectionType {
  id?: string;
  title: string;
  members: TeamMemberType[];
}

// ===== Shared Components =====
function MemberImage({
  imageUrl,
  name,
  size = "sm",
}: {
  imageUrl: string;
  name: string;
  size?: "sm" | "lg";
}) {
  const sizeClasses = size === "lg" ? "w-48 h-48" : "w-32 h-32";
  return (
    <div className={`relative ${sizeClasses} mb-4 group`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7E3BB2] to-[#B28CE4] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
      <img
        src={imageUrl}
        alt={name}
        className="rounded-full object-cover w-full h-full shadow-xl border-4 border-[#B28CE4]/30 hover:border-[#B28CE4] transition-all duration-300 relative z-10"
      />
    </div>
  );
}

function SocialLinks({
  socials,
  size = 18,
}: {
  socials?: SocialLinksType;
  size?: number;
}) {
  return (
    <div className="flex gap-3">
      {socials?.instagram && (
        <a
          href={socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B28CE4]/70 hover:text-[#B28CE4] transition-colors hover:scale-110 transform duration-200"
          title="Instagram"
        >
          <Instagram size={size} />
        </a>
      )}
      {socials?.linkedin && (
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B28CE4]/70 hover:text-[#B28CE4] transition-colors hover:scale-110 transform duration-200"
          title="LinkedIn"
        >
          <Linkedin size={size} />
        </a>
      )}
      {socials?.github && (
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#B28CE4]/70 hover:text-[#B28CE4] transition-colors hover:scale-110 transform duration-200"
          title="GitHub"
        >
          <Github size={size} />
        </a>
      )}
    </div>
  );
}

// ===== Member Cards =====
function ExecutiveMember({ name, title, imageUrl, socials }: TeamMemberType) {
  return (
    <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-[#04132e] to-[#0a1f3d] border border-[#B28CE4]/20 hover:border-[#B28CE4]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7E3BB2]/20 hover:-translate-y-1">
      <MemberImage imageUrl={imageUrl} name={name} size="lg" />
      <h3 className="text-white font-bold text-2xl mb-2">{name}</h3>
      <p className="text-[#B28CE4] mb-4 text-sm uppercase tracking-wider font-semibold">
        {title}
      </p>
      <SocialLinks socials={socials} size={20} />
    </div>
  );
}

function TeamMember({ name, title, imageUrl, socials }: TeamMemberType) {
  return (
    <div className="flex flex-col items-center p-4 rounded-xl bg-gradient-to-br from-[#04132e] to-[#0a1f3d] border border-[#B28CE4]/20 hover:border-[#B28CE4]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#7E3BB2]/20 hover:-translate-y-1 h-full">
      <MemberImage imageUrl={imageUrl} name={name} />
      <h3 className="text-white font-bold text-xl mb-1 mt-2 text-center flex items-center justify-center" style={{ minHeight: '56px' }}>{name}</h3>
      <p className="text-[#B28CE4] mb-3 text-sm uppercase tracking-wider font-semibold text-center flex items-center justify-center" style={{ minHeight: '32px' }}>
        {title}
      </p>
      <div className="mt-auto">
        <SocialLinks socials={socials} />
      </div>
    </div>
  );
}

// ===== Layout Components =====
function TeamGrid({ members }: { members: TeamMemberType[] }) {
  return (
    <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{ gridAutoRows: '1fr' }}>
      {members.map((member) => (
        <TeamMember key={member.name} {...member} />
      ))}
    </div>
  );
}

function TeamSection({ section }: { section: TeamSectionType }) {
  return (
    <section className="mb-24 relative">
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 relative">
          <span className="relative z-10">{section.title}</span>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-32 h-1 bg-gradient-to-r from-transparent via-[#B28CE4] to-transparent"></div>
        </h2>
        <TeamGrid members={section.members} />
      </div>
    </section>
  );
}

function ExecutiveTeam({ section }: { section: TeamSectionType }) {
  const [president, ...executives] = section.members;
  return (
    <section className="mb-32 relative">
      <div className="relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-20 relative">
          <span className="relative z-10">EXECUTIVES</span>
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-40 h-1 bg-gradient-to-r from-transparent via-[#B28CE4] to-transparent"></div>
        </h2>
        <div className="flex justify-center mb-20">
          <ExecutiveMember {...president} />
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {executives.map((executive) => (
            <div key={executive.name} className="flex justify-center">
              <ExecutiveMember {...executive} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===== Dropdown Menu Component =====
function DropdownMenu({ onAddMember, onEditMember, onRemoveMember }: { onAddMember: () => void; onEditMember: () => void; onRemoveMember: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-6 py-3 text-white bg-[#B28CE4] hover:bg-[#7E3BB2] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#7E3BB2]/30 font-semibold"
      >
        Actions
        <ChevronDown size={16} />
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 bg-[#04132e] rounded-lg shadow-2xl z-50 border border-[#B28CE4]/30 backdrop-blur-sm">
            <div className="py-1">
              <button
                onClick={() => {
                  onAddMember();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-white hover:bg-[#B28CE4]/20 transition-colors hover:text-[#B28CE4]"
              >
                Add member
              </button>
              <button
                onClick={() => {
                  onEditMember();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-white hover:bg-[#B28CE4]/20 transition-colors hover:text-[#B28CE4]"
              >
                Edit member
              </button>
              <button
                onClick={() => {
                  onRemoveMember();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-white hover:bg-[#B28CE4]/20 transition-colors hover:text-[#B28CE4]"
              >
                Remove member
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ===== Add Member Modal Component =====
function AddMemberModal({
  isOpen,
  onClose,
  onAdd,
  sections,
}: {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (member: any) => void;
  sections: TeamSection[];
}) {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    domain: "",
    role: "",
    image: null as File | null,
    imagePreview: "",
    instagram: "",
    linkedin: "",
    github: "",
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const validTypes = ["image/svg+xml", "image/png", "image/jpeg", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        alert("Please select a valid image file (SVG, PNG, or JPG)");
        return;
      }
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: file, imagePreview: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.department || !formData.domain) {
      alert("Please fill in all required fields (Name, Department, Domain)");
      return;
    }

    if (!formData.imagePreview && !formData.image) {
      alert("Please select an image");
      return;
    }

    // Convert image to base64 if file is selected but no preview
    let imageUrl = formData.imagePreview;
    if (formData.image && !imageUrl) {
      imageUrl = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result as string);
        };
        reader.readAsDataURL(formData.image!);
      });
    }

    const newMember = {
      name: formData.name.toUpperCase(),
      title: formData.role || formData.department,
      imageUrl: imageUrl || "",
      socials: {
        instagram: formData.instagram || undefined,
        linkedin: formData.linkedin || undefined,
        github: formData.github || undefined,
      },
    };

    onAdd({ member: newMember, domain: formData.domain });
    
    // Reset form
    setFormData({
      name: "",
      department: "",
      domain: "",
      role: "",
      image: null,
      imagePreview: "",
      instagram: "",
      linkedin: "",
      github: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-[#04132e] rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto border border-[#B28CE4]/30 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Add New Member</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-1">Name *</label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-gray-700 text-white border-gray-600"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Department *</label>
            <Input
              type="text"
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              required
              className="bg-gray-700 text-white border-gray-600"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Domain *</label>
            <select
              value={formData.domain}
              onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
              required
              className="w-full h-10 rounded-md border border-gray-600 bg-gray-700 text-white px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Domain</option>
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-white mb-1">Role (Optional)</label>
            <Input
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="bg-gray-700 text-white border-gray-600"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Image (SVG, PNG, JPG) *</label>
            <Input
              type="file"
              accept=".svg,.png,.jpg,.jpeg"
              onChange={handleImageChange}
              required
              className="bg-gray-700 text-white border-gray-600 file:text-white file:bg-purple-600 file:border-0 file:rounded file:px-3 file:py-1 file:mr-3"
            />
            {formData.imagePreview && (
              <img
                src={formData.imagePreview}
                alt="Preview"
                className="mt-2 w-24 h-24 object-cover rounded-full"
              />
            )}
          </div>
          <div>
            <label className="block text-white mb-1">Instagram Link</label>
            <Input
              type="url"
              value={formData.instagram}
              onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
              className="bg-gray-700 text-white border-gray-600"
            />
          </div>
          <div>
            <label className="block text-white mb-1">LinkedIn Link</label>
            <Input
              type="url"
              value={formData.linkedin}
              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              className="bg-gray-700 text-white border-gray-600"
            />
          </div>
          <div>
            <label className="block text-white mb-1">GitHub Link</label>
            <Input
              type="url"
              value={formData.github}
              onChange={(e) => setFormData({ ...formData, github: e.target.value })}
              className="bg-gray-700 text-white border-gray-600"
            />
          </div>
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-[#B28CE4] hover:bg-[#7E3BB2] text-white transition-all duration-300"
            >
              Add Member
            </Button>
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ===== Edit Member Modal Component =====
function EditMemberModal({
  isOpen,
  onClose,
  onSave,
  sections,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { originalName: string; originalDomain: string; member: any; newDomain: string }) => void;
  sections: TeamSection[];
}) {
  const [view, setView] = useState<'list' | 'edit'>('list');
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    domain: "",
    role: "",
    image: null as File | null,
    imagePreview: "",
    instagram: "",
    linkedin: "",
    github: "",
  });

  const handleMemberClick = (member: any, domain: string) => {
    setSelectedMember(member);
    setSelectedDomain(domain);
    setFormData({
      name: member.name,
      department: member.title.includes('CSE') || member.title.includes('AIML') || member.title.includes('CSBS') || member.title.includes('IoT') 
        ? member.title 
        : '',
      domain: domain,
      role: member.title,
      image: null,
      imagePreview: member.imageUrl,
      instagram: member.socials?.instagram || "",
      linkedin: member.socials?.linkedin || "",
      github: member.socials?.github || "",
    });
    setView('edit');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ["image/svg+xml", "image/png", "image/jpeg", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        alert("Please select a valid image file (SVG, PNG, or JPG)");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: file, imagePreview: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.department || !formData.domain) {
      alert("Please fill in all required fields (Name, Department, Domain)");
      return;
    }

    let imageUrl = formData.imagePreview;
    if (formData.image && !imageUrl) {
      imageUrl = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result as string);
        };
        reader.readAsDataURL(formData.image!);
      });
    }

    const updatedMember = {
      name: formData.name.toUpperCase(),
      title: formData.role || formData.department,
      imageUrl: imageUrl || "",
      socials: {
        instagram: formData.instagram || undefined,
        linkedin: formData.linkedin || undefined,
        github: formData.github || undefined,
      },
    };

    onSave({
      originalName: selectedMember.name,
      originalDomain: selectedDomain,
      member: updatedMember,
      newDomain: formData.domain,
    });

    // Reset
    setView('list');
    setSelectedMember(null);
    setSelectedDomain('');
    setFormData({
      name: "",
      department: "",
      domain: "",
      role: "",
      image: null,
      imagePreview: "",
      instagram: "",
      linkedin: "",
      github: "",
    });
  };

  const handleBackToList = () => {
    setView('list');
    setSelectedMember(null);
    setSelectedDomain('');
  };

  if (!isOpen) return null;

  if (view === 'edit') {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-[#04132e] rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto border border-[#B28CE4]/30 shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">Edit Member</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
          </div>
          <form onSubmit={handleEditSubmit} className="space-y-4">
            <div>
              <label className="block text-white mb-1">Name *</label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-[#0a1f3d] text-white border-[#B28CE4]/30 focus:border-[#B28CE4] focus:ring-[#B28CE4]/20"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Department *</label>
              <Input
                type="text"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                required
                className="bg-[#0a1f3d] text-white border-[#B28CE4]/30 focus:border-[#B28CE4] focus:ring-[#B28CE4]/20"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Domain *</label>
              <select
                value={formData.domain}
                onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                required
                className="w-full h-10 rounded-md border border-[#B28CE4]/30 bg-[#0a1f3d] text-white px-3 focus:outline-none focus:ring-2 focus:ring-[#B28CE4] focus:border-[#B28CE4]"
              >
                <option value="">Select Domain</option>
                {sections.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-white mb-1">Role (Optional)</label>
              <Input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="bg-[#0a1f3d] text-white border-[#B28CE4]/30 focus:border-[#B28CE4] focus:ring-[#B28CE4]/20"
              />
            </div>
            <div>
              <label className="block text-white mb-1">Image (SVG, PNG, JPG)</label>
              <Input
                type="file"
                accept=".svg,.png,.jpg,.jpeg"
                onChange={handleImageChange}
                className="bg-gray-700 text-white border-gray-600 file:text-white file:bg-purple-600 file:border-0 file:rounded file:px-3 file:py-1 file:mr-3"
              />
              {formData.imagePreview && (
                <img
                  src={formData.imagePreview}
                  alt="Preview"
                  className="mt-2 w-24 h-24 object-cover rounded-full"
                />
              )}
            </div>
            <div>
              <label className="block text-white mb-1">Instagram Link</label>
              <Input
                type="url"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                className="bg-[#0a1f3d] text-white border-[#B28CE4]/30 focus:border-[#B28CE4] focus:ring-[#B28CE4]/20"
              />
            </div>
            <div>
              <label className="block text-white mb-1">LinkedIn Link</label>
              <Input
                type="url"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                className="bg-[#0a1f3d] text-white border-[#B28CE4]/30 focus:border-[#B28CE4] focus:ring-[#B28CE4]/20"
              />
            </div>
            <div>
              <label className="block text-white mb-1">GitHub Link</label>
              <Input
                type="url"
                value={formData.github}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                className="bg-[#0a1f3d] text-white border-[#B28CE4]/30 focus:border-[#B28CE4] focus:ring-[#B28CE4]/20"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-[#B28CE4] hover:bg-[#7E3BB2] text-white transition-all duration-300"
              >
                Save Changes
              </Button>
              <Button
                type="button"
                onClick={handleBackToList}
                variant="outline"
                className="flex-1 bg-[#0a1f3d] text-white border-[#B28CE4]/30 hover:bg-[#B28CE4]/20 transition-all duration-300"
              >
                Back
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Select Member to Edit</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>
        </div>
        <div className="space-y-8">
          {sections.map((section) => (
            section.members.length > 0 && (
              <div key={section.id} className="border-b border-[#B28CE4]/20 pb-6 last:border-b-0">
                <h3 className="text-xl font-semibold text-[#B28CE4] mb-4">{section.title}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {section.members.map((member) => (
                    <button
                      key={`${section.id}-${member.name}`}
                      onClick={() => handleMemberClick(member, section.id!)}
                      className="flex flex-col items-center p-3 rounded-lg bg-[#0a1f3d] border border-[#B28CE4]/20 hover:bg-[#B28CE4]/10 hover:border-[#B28CE4]/40 transition-all duration-300 cursor-pointer hover:scale-105"
                    >
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover mb-2 border-2 border-[#B28CE4]"
                      />
                      <span className="text-white text-sm font-medium text-center">{member.name}</span>
                      <span className="text-gray-400 text-xs text-center mt-1">{member.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== Remove Member Modal Component =====
function RemoveMemberModal({
  isOpen,
  onClose,
  onRemove,
  sections,
}: {
  isOpen: boolean;
  onClose: () => void;
  onRemove: (data: { name: string; domain: string; reason: string }) => void;
  sections: TeamSection[];
}) {
  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    reason: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.domain || !formData.reason) {
      alert("Please fill in all required fields (Name, Domain, Reason)");
      return;
    }

    // Check word count (approximately 300 words)
    const wordCount = formData.reason.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount > 300) {
      alert(`Reason must be 300 words or less. Current word count: ${wordCount}`);
      return;
    }

    onRemove({
      name: formData.name.toUpperCase(),
      domain: formData.domain,
      reason: formData.reason,
    });
    
    // Reset form
    setFormData({
      name: "",
      domain: "",
      reason: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  const wordCount = formData.reason.trim().split(/\s+/).filter(word => word.length > 0).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-[#04132e] rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto border border-[#B28CE4]/30 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Remove Member</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white mb-1">Name *</label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-gray-700 text-white border-gray-600"
              placeholder="Enter member name"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Domain *</label>
            <select
              value={formData.domain}
              onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
              required
              className="w-full h-10 rounded-md border border-gray-600 bg-gray-700 text-white px-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Select Domain</option>
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-white mb-1">
              Reason * <span className="text-gray-400 text-sm">({wordCount}/300 words)</span>
            </label>
            <textarea
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              required
              maxLength={3000}
              rows={6}
              className="w-full rounded-md border border-[#B28CE4]/30 bg-[#0a1f3d] text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#B28CE4] focus:border-[#B28CE4] resize-none"
              placeholder="Enter reason for removal (max 300 words)"
            />
            {wordCount > 300 && (
              <p className="text-red-400 text-sm mt-1">
                Word count exceeds 300 words. Please reduce the text.
              </p>
            )}
          </div>
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-red-600 hover:bg-red-700 text-white transition-all duration-300"
              disabled={wordCount > 300}
            >
              Remove Member
            </Button>
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ===== Page Component =====
export default function TeamPage() {
  const [sections, setSections] = useState<TeamSection[]>(initialTeamSections);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedSections = localStorage.getItem('teamSections');
    if (savedSections) {
      try {
        setSections(JSON.parse(savedSections));
      } catch (e) {
        console.error('Error loading saved sections:', e);
      }
    }
  }, []);

  // Save to localStorage whenever sections change
  useEffect(() => {
    localStorage.setItem('teamSections', JSON.stringify(sections));
  }, [sections]);

  const handleAddMember = ({ member, domain }: { member: any; domain: string }) => {
    setSections((prevSections) => {
      return prevSections.map((section) => {
        if (section.id === domain) {
          return {
            ...section,
            members: [...section.members, member],
          };
        }
        return section;
      });
    });
  };

  const handleEditMember = ({ originalName, originalDomain, member, newDomain }: { originalName: string; originalDomain: string; member: any; newDomain: string }) => {
    setSections((prevSections) => {
      return prevSections.map((section) => {
        // If domain hasn't changed, update the member in place
        if (section.id === newDomain && originalDomain === newDomain) {
          return {
            ...section,
            members: section.members.map((m) =>
              m.name.toUpperCase() === originalName.toUpperCase() ? member : m
            ),
          };
        }
        // If this is the original domain and domain changed, remove the old member
        if (section.id === originalDomain && originalDomain !== newDomain) {
          return {
            ...section,
            members: section.members.filter(
              (m) => m.name.toUpperCase() !== originalName.toUpperCase()
            ),
          };
        }
        // If this is the new domain and it's different from original, add the updated member
        if (section.id === newDomain && originalDomain !== newDomain) {
          return {
            ...section,
            members: [...section.members, member],
          };
        }
        return section;
      });
    });
    alert(`Member "${member.name}" has been updated successfully.`);
  };

  const handleRemoveMember = ({ name, domain, reason }: { name: string; domain: string; reason: string }) => {
    setSections((prevSections) => {
      return prevSections.map((section) => {
        if (section.id === domain) {
          // Find and remove the member by name (case-insensitive)
          const updatedMembers = section.members.filter(
            (member) => member.name.toUpperCase() !== name.toUpperCase()
          );
          
          // Check if member was found and removed
          if (updatedMembers.length === section.members.length) {
            alert(`Member "${name}" not found in ${section.title} section.`);
            return section;
          }
          
          alert(`Member "${name}" has been removed from ${section.title} section.`);
          return {
            ...section,
            members: updatedMembers,
          };
        }
        return section;
      });
    });
  };

  return (
    <div className="relative bg-[#04132e] min-h-screen pt-24 pb-16 px-4 md:px-8">
      {/* Background Gradients */}
      <div
        className="absolute top-0 left-0 z-0 h-full pointer-events-none w-full md:w-1/2"
        style={{
          background: "radial-gradient(circle at left, rgba(126, 59, 178, 0.15) 0%, transparent 50%)"
        }}
      />
      <div
        className="absolute top-0 right-0 z-0 h-full pointer-events-none w-full md:w-1/2"
        style={{
          background: "radial-gradient(circle at right, rgba(186, 94, 133, 0.15) 0%, transparent 50%)"
        }}
      />
      
      {/* Dropdown Menu in Top Right */}
      <div className="fixed top-20 right-8 z-30">
        <DropdownMenu
          onAddMember={() => setIsAddModalOpen(true)}
          onEditMember={() => setIsEditModalOpen(true)}
          onRemoveMember={() => setIsRemoveModalOpen(true)}
        />
      </div>

      {/* Add Member Modal */}
      <AddMemberModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddMember}
        sections={sections}
      />

      {/* Edit Member Modal */}
      <EditMemberModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleEditMember}
        sections={sections}
      />

      {/* Remove Member Modal */}
      <RemoveMemberModal
        isOpen={isRemoveModalOpen}
        onClose={() => setIsRemoveModalOpen(false)}
        onRemove={handleRemoveMember}
        sections={sections}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Executive Team */}
        <ExecutiveTeam section={executiveTeam} />
        {/* Other Team Sections */}
        {sections.map((section) => (
          <TeamSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
