"use client";
import React, { useEffect, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    
    const [subject, setSubject] = useState('');

   useEffect(() => {
  const currentQuery = searchParams.get("subject") || "";

  // Only push if the current value in the URL is different
  if (subject === "all" && currentQuery) {
    const newUrl = removeKeysFromUrlQuery({
      params: searchParams.toString(),
      keysToRemove: ["subject"],
    });
    router.push(newUrl, { scroll: false });
  } else if (subject !== "all" && subject !== currentQuery) {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "subject",
      value: subject,
    });
    router.push(newUrl, { scroll: false });
  }
}, [subject]);


    return (
        <Select onValueChange={setSubject} value={subject}>
            <SelectTrigger className="input capitalize">
                <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">All subjects</SelectItem>
                {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject} className="capitalize">
                        {subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SubjectFilter;