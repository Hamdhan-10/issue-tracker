<?php

namespace App\Services;

use App\Models\Issue;

class IssueService
{
    public function getAllIssues()
    {
        return Issue::latest()->get();
    }

    public function createIssue(array $data)
    {
        return Issue::create($data);
    }

    public function updateStatus(int $id, string $status)
    {
        $issue = Issue::findOrFail($id);

        $issue->update([
            'status' => $status
        ]);

        return $issue;
    }
}