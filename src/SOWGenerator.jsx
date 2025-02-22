import { useState } from "react";
import { Button, Input, Textarea, Label } from "@/components/ui";

export default function SOWGenerator() {
  const [formData, setFormData] = useState({
    projectTitle: "",
    contractNumber: "",
    scope: "",
    deliverables: "",
    period: "",
    compliance: "",
  });
  const [generatedSOW, setGeneratedSOW] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateSOW = () => {
    const sowTemplate = `
    **Statement of Work (SOW)**
    
    **Project Title:** ${formData.projectTitle}
    **Contract Number:** ${formData.contractNumber}
    
    **Scope of Work:**
    ${formData.scope}
    
    **Key Deliverables:**
    ${formData.deliverables}
    
    **Period of Performance:**
    ${formData.period}
    
    **Compliance Requirements:**
    ${formData.compliance}
    `;
    setGeneratedSOW(sowTemplate);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">AI-Driven SOW Generator</h1>
      <div className="space-y-2">
        <Label>Project Title</Label>
        <Input name="projectTitle" value={formData.projectTitle} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label>Contract Number</Label>
        <Input name="contractNumber" value={formData.contractNumber} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label>Scope of Work</Label>
        <Textarea name="scope" value={formData.scope} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label>Key Deliverables</Label>
        <Textarea name="deliverables" value={formData.deliverables} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label>Period of Performance</Label>
        <Textarea name="period" value={formData.period} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label>Compliance Requirements</Label>
        <Textarea name="compliance" value={formData.compliance} onChange={handleChange} />
      </div>
      <Button onClick={generateSOW} className="mt-4">Generate SOW</Button>
      {generatedSOW && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-bold">Generated SOW</h2>
          <pre className="whitespace-pre-wrap">{generatedSOW}</pre>
        </div>
      )}
    </div>
  );
}
